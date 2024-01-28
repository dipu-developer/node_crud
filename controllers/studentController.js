import studentModle from "../modules/Students.js";

class StudentController {
  //to create the studnt data
  static createDoc = async (req, res) => {
    try {
      // console.log(req.body) // Fatch form data
      const { name, age, fees } = req.body;
      const doc = new studentModle({
        name: name,
        age: age,
        fees: fees,
      }); // create the doc

      const result = await doc.save(); // save the documents
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };
  //to render the home page
  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModle.find();
      res.render("", { data: result });
    } catch (error) {
      console.log(error);
    }
  };
  static editDoc = async (req, res) => {
    try {
      // console.log("functionis call", req.params.id)
      const result = await studentModle.findById(req.params.id);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };
  static updateDoc = async (req, res) => {
    try {
      const result = await studentModle.findByIdAndUpdate(
        req.params.id,
        req.body,
        { returnDocument: "after" }
      );
    } catch (error) {
      console.log(error);
    }
    res.redirect("/");
  };
  static deleteDoc = async (req, res) => {
    try {
        
        const result = await studentModle.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.log(error)
    }
    res.redirect('/');
  };
}
export default StudentController;
