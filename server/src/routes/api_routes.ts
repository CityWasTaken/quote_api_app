import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();

const people = [
    {
        id: 1,
        name: "city"
    },
    {
        id: 2,
        name: 'JD'
    },
    {
        id: 3,
        name: 'Bob'
    }
];

// Get Person By ID
router.get('/api/person/:personId', (requestObj: Request, responseObj: Response) => {
    const person = people.find((personObj) => {
        if (personObj.id == +requestObj.params.personId) {
            return personObj;
        }

        return false;
    });

    responseObj.json(person || {
        message: 'Theres no person to be found here...'
    });
});





router.get('/api/quotes', async (requestObj: Request, responseObj: Response): Promise<any> => {
    console.log(requestObj.query);
    
    if (!requestObj.query.cat) {
        return responseObj.json({
            message: 'A catagory must be provided'
        });
    }

    const url = `https://api.api-ninjas.com/v1/quotes?category=${requestObj.query.cat}`;
    try {
        const res = await axios.get(url, {
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        
        console.log(res.data);
        
    
        responseObj.json({
            quote: res.data[0].quote
        });
    } catch(error) {
        responseObj.json({
            message: 'You must type in a known catagory'
        })
    }

    
});

export default router;