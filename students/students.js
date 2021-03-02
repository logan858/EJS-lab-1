let students = [
    {name: "James", school: "UofT"},
    {name: "Ximena", school: "UofMass"},
    {name: "Logan", school: "GA"},
    {name: "Lloyd", school: "Kellogg"}
  ];

  module.exports = {
    getAll: function() {
      return students;
    }
  };