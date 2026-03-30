const UserModel = require("../Model/UserModel");

const signcontroller = async (req, res) => {
    try {
        const { Name, email, password } = req.body;
        // validation
        if (!Name || !email || !password) {
            return res
                .status(400)
                .send({ success: false, message: " please provide all fileds" });
        }
        // checking User
        const existing = await UserModel.findOne({ email })
        if (existing) {
            return res.status(400).send({
                success: false,
                message: "email already register please login"
            })
        }
        // create new user
        const user = await UserModel.create({
            Name,
            email,
            password
        })
        // console.log(user);


        res.status(201).send({
            success: true,
            message: "Sucessfully Registered",
            user
        });
        console.log(user);


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in register api"
        })
    }

}

module.exports = signcontroller