const { green, red } = require("chalk");
const { db, Student, Campus } = require("./server/db");

const students = [
  {
    id: 1,
    firstName: "Mae",
    lastName: "Jemison",
    email: "fake@fake.com",
    gpa: 4,
    imageUrl:
      "https://historydaily.org/content/53493/70b7eaf7a2893e92cc0c0e21db096327.jpg",
  },
  {
    id: 2,
    firstName: "Sally",
    lastName: "Ride",
    email: "fake@fake.com",
    gpa: 4,
    imageUrl:
      "https://historydaily.org/content/53493/5f087b38e047d55d362f5d9227111ea1.jpg",
  },
];

const campuses = [
  {
    id: 1,
    name: "Mars Academy",
    address: "123 Fake Blvd",
    description: "A great place to play and eat",
  },
  {
    id: 2,
    name: "Jupiter Jumpstart",
    address: "321 Fake St",
    description: "Where a kid can be a kid",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    const student1 = await Student.create({
      // id: 1,
      firstName: "Mae",
      lastName: "Jemison",
      email: "fake@fake.com",
      gpa: 4,
      imageUrl:
        "https://historydaily.org/content/53493/70b7eaf7a2893e92cc0c0e21db096327.jpg",
    });

    const student2 = await Student.create({
      // id: 2,
      firstName: "Sally",
      lastName: "Ride",
      email: "fake@fake.com",
      gpa: 4,
      imageUrl:
        "https://historydaily.org/content/53493/5f087b38e047d55d362f5d9227111ea1.jpg",
    });

    const campus1 = await Campus.create({
      name: "Mars Academy",
      address: "123 Fake Blvd",
      description: "A great place to shop and eat",
    });

    const campus2 = await Campus.create({
      name: "Jupiter Jumpstart",
      address: "321 Fake St",
      description: "Where a kid can be a kid",
    });
    await student1.setCampus(campus1);
    await student2.setCampus(campus1);

    // console.log(Object.getPrototypeOf(student1));
    // await Promise.all(
    //   students.map((student) => {
    //     return Student.create(student);
    //   })
    // );
    // await Promise.all(
    //   campuses.map((campus) => {
    //     return Campus.create(campus);
    //   })
    // );

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
