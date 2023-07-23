import React from 'react';
import { Link } from 'react-router-dom';

const TandC = () => {
    return (
        <div className='login'>
            <h3>Terms and Conditions</h3>
            <p className=''><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates accusantium eligendi asperiores nemo laboriosam quis dolore, consequuntur odit magnam expedita adipisci cum! Quaerat aut rerum animi veritatis. Tenetur assumenda earum natus, dolorem quo molestiae repellat veritatis, iusto temporibus at aut repellendus veniam enim ipsa perferendis quasi voluptatibus nam dolor qui, hic quia ipsam culpa. Animi autem similique quaerat earum qui. Nostrum voluptates ipsa eius quas natus placeat, nihil nam nulla molestiae, recusandae nesciunt error consectetur eligendi iste omnis rem maxime assumenda laborum debitis dolorum laboriosam non. Numquam adipisci, placeat eveniet nesciunt culpa nostrum doloremque veritatis sunt molestias. Deleniti non maiores et quae perferendis distinctio ipsam. Nihil doloremque dolorum facilis minus atque eos. Quae dolorum animi veniam ab ipsam delectus nobis mollitia quas cupiditate sint provident vitae, hic repellat iste. Molestias recusandae accusamus repellendus quod delectus fuga adipisci quae, rem, ipsa magni debitis eum unde sed.</small></p>

            <Link className='btn btn-outline-primary' to={'/register'}>Register</Link>
        </div>
    );
};

export default TandC;