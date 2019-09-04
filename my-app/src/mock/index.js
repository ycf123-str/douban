var Mock = require("mockjs");

Mock.mock("/homedata","get",require("./json/homedata.json"));
Mock.mock("/movie","get",require("./json/movie.json"));
Mock.mock("/faxian","get",require("./json/faxianhaodianying.json"));
Mock.mock("/fenlei","get",require("./json/movieClass.json"));
Mock.mock("/books","get",require("./json/books.json"));
Mock.mock("/xiaozua","get",require("./json/xiaozua.json"));
Mock.mock("/searchClass","get",require("./json/searchClass.json"));