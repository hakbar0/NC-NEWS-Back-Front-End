import faker  from 'faker';
import db from '../firebase';

const storiesID = [
  "-L4erJ5PWMD_1szO2rvI",
  "-L4erJ5Ui5NJNamxBnNY",
  "-L4erJ5VIul5ExGX-f2x",
  "-L4erJ5VIul5ExGX-f2y",
  "-L4erJ5VIul5ExGX-f2z",
  "-L4erJ5WZHrkCfj5oh2H",
  "-L4erJ5WZHrkCfj5oh2I",
  "-L4erJ5WZHrkCfj5oh2J",
  "-L4erJ5X1EaSMR88BHS4",
  "-L4erJ5X1EaSMR88BHS5",
  "-L4erJ5X1EaSMR88BHS6",
  "-L4erJ5X1EaSMR88BHS7",
  "-L4erJ5YCvcLPU_S7gJz",
  "-L4erJ5YCvcLPU_S7gK-",
  "-L4erJ5YCvcLPU_S7gK0",
  "-L4erJ5YCvcLPU_S7gK1",
  "-L4erJ5Z3qIzym3NJx4q",
  "-L4erJ5Z3qIzym3NJx4r",
  "-L4erJ5Z3qIzym3NJx4s",
  "-L4erJ5_DvJv98A5r6qd",
  "-L4erJ5_DvJv98A5r6qe",
  "-L4erJ5_DvJv98A5r6qf",
  "-L4erJ5_DvJv98A5r6qg",
  "-L4erJ5ahQJFJQSlp3Fv",
  "-L4erJ5ahQJFJQSlp3Fw",
  "-L4erJ5ahQJFJQSlp3Fx",
  "-L4erJ5b8NR_cLXz33QQ",
  "-L4erJ5b8NR_cLXz33QR",
  "-L4erJ5cl_upQB6Hvkvg",
  "-L4erJ5cl_upQB6Hvkvh",
  "-L4erJ5cl_upQB6Hvkvi",
  "-L4erJ5dNtdCBBCxAS0O",
  "-L4erJ5dNtdCBBCxAS0P",
  "-L4erJ5dNtdCBBCxAS0Q",
  "-L4erJ5dNtdCBBCxAS0R",
  "-L4erJ5eJo56Bvs5BsjK"
]

let commentObj = {};

const RandomCommentGenerator = () => {
  for (let i = 0; i < 50; i++) {
    let storyID = storiesID[Math.floor(Math.random() * 36)]
    let body = faker.fake("{{lorem.paragraphs}}")
    let name = faker.fake("{{name.lastName}} {{name.firstName}}")
    let creationDate = new Date(Date.now()).toISOString()
    db.ref("/Comments").push({
      id: storyID,
      message: body,
      fullname: name,
      createdDate: creationDate
    });
  }
}

export default RandomCommentGenerator;