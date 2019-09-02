var Mock = require("mockjs");

Mock.mock("/homedata","get",require("./json/homedata.json"));
Mock.mock("/movie","get",require("./json/movie.json"));