const AWS = require('aws-sdk');

AWS.config.update({region: "us-east-1"})

exports.handler = async (event,context) => {
    const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"});
    
    const params = {
        TableName: "guitars",
        Key: {
            year: {
                S: "1999"
            }
        }
    }
    
    try{
        const data = await ddb.getItem(params).promise();
        console.log(data)
    } catch(err){
        console.log(err)
    }
    
    
};
