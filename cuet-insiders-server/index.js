
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const events = require('./data/events.json');
const news = require('./data/news.json');
const newsCategories = require('./data/newsCategories.json');



app.use(cors());
app.use(express.json());


const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

async function run() {
	try {
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
		
		//=============== Collections =================
	
		const userCollection = client.db('server').collection("Users");
		const mentorCollection = client.db('server').collection("Mentors");
		const bookmarks = client.db('server').collection("Bookmarks");
		const posts = client.db('server').collection("Posts");
		const appointments = client.db('server').collection("Appointments");



		// =========================== CREATE & UPDATE ===============================

		// Saving new user to DB
		app.post('/users', async (req, res) => {
			const user = req.body;
			const query = { email: user.email };
			const cursor = userCollection.find(query);
			const searchedUser = await cursor.toArray();
			if (searchedUser.length == 0) {
				const result = await userCollection.insertOne(user);
				res.send(result);
			}
		})

		
		// Saving new posts
		app.post("/posts", async (req, res) => {
			const post = req.body;
			const result = await posts.insertOne(post);
			res.send(result);
		});
		

		// updating likes of a post with postId == id
		app.post("/posts/likes/:id", async (req, res) => {
			const postId = req.params.id;
			const {likedUser} = req.body;
			const filter = { _id: new ObjectId(postId) };
			const cursor = posts.find(filter);
			const post = await cursor.toArray();
			const isLiked = post[0].likes.find(usr => usr === likedUser);
			if (isLiked === undefined) {
				const newLikesArr = [...post[0].likes, likedUser];
				const option = { upsert: true };
				const updateLikes = {
				$set: {
					likes: newLikesArr,
				},
				};
				const result = await posts.updateOne(
					filter,
					updateLikes,
					option
				);
				res.send(result);
			}
			else {
				const newLikesArr = post[0].likes.filter(usr => usr !== likedUser)
				const option = { upsert: true };
				const updateLikes = {
				$set: {
					likes: newLikesArr,
				},
				};
				const result = await posts.updateOne(
					filter,
					updateLikes,
					option
				);
				res.send(result);
			}
		});


		// updating comments of a post with postId == id
		app.post("/posts/comments/:id", async (req, res) => {
			const postId = req.params.id;
			const { commText, commenter, commenterId, commentDate } = req.body;
			const filter = { _id: new ObjectId(postId) };
			const cursor = posts.find(filter);
			const post = await cursor.toArray();
			const newComment = {commText, commenter, commenterId, commentDate};
			const newCommentArr = [...post[0].comments, newComment];
			const option = { upsert: true };
			const updateComments = {
			$set: {
				comments: newCommentArr,
			},
			};
			const result = await posts.updateOne(
				filter,
				updateComments,
				option
			);
			res.send(result);
		});


		// updating profile of a user with userId == id
		app.post("/user/update/:id", async (req, res) => {
			const id = req.params.id;
			const { name, photoURL, coverURL, displayName, bio, isMentor, isAvailable, deptName, position, institution, batch, currentLoc, facebook, linkedin, mailSocial, interests } = req.body;

			const filter = { userId: id };
			const cursor = userCollection.find(filter);
			const userArr = await cursor.toArray();
			const user = userArr[0];

			const option = { upsert: true };
			const updateProfile = {
				$set: {
					displayName: displayName,
					photoURL: photoURL,
					coverURL: coverURL,
					bio: bio,
					isMentor: isMentor,
					isAvailable: isAvailable,
					deptName: deptName,
					position: position,
					institution: institution,
					batch: batch,
					currentLoc: currentLoc,
					facebook: facebook,
					linkedin: linkedin,
					mailSocial: mailSocial,
					interests: interests
				},
			};
			const result = await userCollection.updateOne(
				filter,
				updateProfile,
				option
			);
			res.send(result);


		})


		// updating follow 
		app.post("/follow", async (req, res) => {  
			const { profileOwner, loggedInUser } = req.body;
			// console.log(loggedInUser, " wants to follow ", profileOwner);

			// get my profile form DB
			const filter1 = { userId: loggedInUser };
			const cursor1 = userCollection.find(filter1);
			const user1 = await cursor1.toArray();

			// get other users profile from DB
			const filter2 = { userId: profileOwner };
			const cursor2 = userCollection.find(filter2);
			const user2 = await cursor2.toArray();

			const isfollowed = user2[0].followers.find(usr => usr === user1[0].userId);
			
			// follow
			if (isfollowed === undefined) {
				// Update followers array of other users profile
				const newFollowersArr = [...user2[0].followers, user1[0].userId]
				const option1 = { upsert: true };
				const updatefollowers = {
					$set: {
						followers: newFollowersArr,
					},
				};
				const result1 = await userCollection.updateOne(
					filter2,
					updatefollowers,
					option1
				);
					
				// update following array of my profile 	
				const newFollowingArr = [...user1[0].following, user2[0].userId];
				const option2 = { upsert: true };
				const updatefollowing = {
					$set: {
						following: newFollowingArr
					}
				};
				const result2 = await userCollection.updateOne(
					filter1,
					updatefollowing,
					option2
				);
				res.send({ result1, result2 });
			}
			// unfollow
			else {
				const newFollowersArr = user2[0].followers.filter(usr => usr !== user1[0].userId)		
				const option1 = { upsert: true };
				const updatefollowers = {
					$set: {
						followers: newFollowersArr,
					},
				};
				const result1 = await userCollection.updateOne(
					filter2,
					updatefollowers,
					option1
				);
					
						
				const newFollowingArr = user1[0].following.filter(usr => usr !== user2[0].userId);
				const option2 = { upsert: true };
				const updatefollowing = {
					$set: {
						following: newFollowingArr
					}
				};
				const result2 = await userCollection.updateOne(
					filter1,
					updatefollowing,
					option2
				);
				res.send({ result1, result2 });
			}
		})
		
		
		// book appointmrnt
		app.post("/appointment", async (req, res) => { 
			const newAppointment = req.body;
			const result = await appointments.insertOne(newAppointment);
			res.send(result);
		})


		// update appointment
		app.post("/appointment/:id", async (req, res) => {
			console.log("hitting api")
			const id = req.params.id;
			const {mentorMsg, newStatus} = req.body;

			const filter = { _id: new ObjectId(id) };
			const cursor = appointments.find(filter);
			const appointment = await cursor.toArray();

			const option = { upsert: true };
			const updateApp = {
				$set: {
					status: newStatus,
					mentorMsg: mentorMsg
				},
			};
			const result = await appointments.updateOne(
				filter,
				updateApp,
				option
			);
			res.send(result);

		})




		// ============================= READ =================================== 

		app.get('/events', (req, res) => {
				res.send(events)
		})
		
		app.get('/events/:id', (req, res) => {
			const id = req.params.id;
			const event = events.find(e => e.eventId === id);
			res.send(event)
		})
		
		app.get('/news-categories', (req, res) => {
				res.send(newsCategories);
		})
		
		app.get('/category/:id', (req, res) => {
			const id = req.params.id;
			if (id === '1') {
				res.send(news);
			}
			else {
				const category_news = news.filter(n => n.category_id === id);
				res.send(category_news);
			}
		})
		
		app.get('/news', (req, res) => {
			res.send(news);
		})
		
		app.get('/news/:id', (req, res) => {
			const id = req.params.id;
			const selectedNews = news.find(n => n._id === id);
			res.send(selectedNews);
		})

		app.get('/user/:id', async (req, res) => {
			const id = req.params.id;

			const query1 = { userId: id };
			const cursor1 = userCollection.find(query1);
			const userProfile = await cursor1.toArray();

			const query2 = { authorId: id };
			const cursor2 = posts.find(query2);
			const userPosts = await cursor2.toArray();

			const profileObj = { userProfile, userPosts };
			res.send(profileObj);
		})

		app.get("/posts", async (req, res) => {
			const query = {};
			const cursor = posts.find(query);
			const Posts = await cursor.toArray();
			res.send(Posts);
		});


		app.get('/myappointments/:id', async (req, res) => {
			const id = req.params.id;
			const query1 = { reqSender: id };
			const cursor1 = appointments.find(query1);
			const myappointments = await cursor1.toArray();
			res.send(myappointments);
		})


		app.get('/requests/:id', async (req, res) => {
			const id = req.params.id;
			const query1 = { mentor: id };
			const cursor1 = appointments.find(query1);
			const requests = await cursor1.toArray();
			res.send(requests);
		})



		// =================================DELETE ==================================
		// delete appointment
		app.delete("/appointment/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await appointments.deleteOne(query);
			res.send(result);
		});

		//delete post


	}
	finally {}
}
run().catch(console.dir);


app.get('/', (req, res) => {
	res.send('Hello World!')
  })



app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})