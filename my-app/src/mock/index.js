var Mock = require("mockjs");

Mock.mock("/homedata","get",require("./json/homedata.json"));
Mock.mock("/movie","get",require("./json/movie.json"));
Mock.mock("/faxian","get",require("./json/faxianhaodianying.json"));
Mock.mock("/fenlei","get",require("./json/movieClass.json"));