import User from "../models/user.model.js"

export const signup = async(req, res)=>{
    // console.log("signup");
    
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body

        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})
        }

        const user = await User.findOne({userName})

        if(user) {
            return res.status(400).json({error: "userName already exists"})
        }

        // Hash password

        // https://avatar-placeholder.iran.liara.run

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userName=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            boyProfilePic: newUser.profilePic
        })

    } catch (error) {
        console.log("Error in signup controller", error.message);
        
        res.status(500).json({error: "Internal Server Error"})
    }
    res.send('signup')
    console.log("signup");   
}

export const login = (req, res)=>{
    console.log('login');
    
}

export const logout = (req, res)=>{
   console.log("logout");
   
}
