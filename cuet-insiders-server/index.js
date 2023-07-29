
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const events = require('./data/events.json');
const news = require('./data/news.json');
const newsCategories = require('./data/newsCategories.json');

// minhazjisun
// eQHd4z4GnIZMQUlw

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://minhazjisun:eQHd4z4GnIZMQUlw@cluster0.fmxscxb.mongodb.net/?retryWrites=true&w=majority";

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
		const bookmarks = client.db('server').collection("Bookmarks");
		const followers = client.db('server').collection("Followers");
		const following = client.db('server').collection("Following");
		const posts = client.db('server').collection("Posts");
		const comments = client.db('server').collection("Comments");


		// ================ CREATE ===================
		
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

		app.post("/posts", async (req, res) => {
			const post = req.body;
			const result = await posts.insertOne(post);
			res.send(result);
		});
		
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


		// ================= READ ====================== 

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
			const query = { userId: id };
			const cursor = userCollection.find(query);
			const userProfile = await cursor.toArray();
			res.send(userProfile);
		})

		app.get("/posts", async (req, res) => {
			const query = {};
			const cursor = posts.find(query);
			const Posts = await cursor.toArray();
			res.send(Posts);
		  });

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