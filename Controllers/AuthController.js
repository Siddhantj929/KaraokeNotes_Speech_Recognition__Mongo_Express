const Users = require("../Models/User.js");

const showUserForm = (_, res) => res.render("User/index");

const createUser = async (req, res) => {
   // User Details
   const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
   };

   try {
      const fetchedUser = await Users.findOne({ email: user.email });

      // If user exists show error that you exists already.
      if (fetchedUser)
         res.render("User/index", {
            error: {text: "This email Id already exists!"}
         });

      // If new user, create the user in database
      else {
         const newUser = new Users(user);
         const savedUser = await newUser.save();
         res.redirect("/user/" + savedUser.id);
      }
   } catch (err) {
      console.log(err);
   }
};

const userProfile = async (req, res) => {
   const user = await Users.findById(req.params.id);

   // If user is not fetched
   if (!user)
      res.render("index", { error: {text: "Sorry, the user is not available!"} });
   // If user is fetched
   else res.render("User/profile", { user });
};

exports.createUser = createUser;
exports.userProfile = userProfile;
exports.showUserForm = showUserForm;
