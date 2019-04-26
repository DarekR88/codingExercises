const chai=require("chai"),should=chai.should();describe("All Test",function(){const e=e=>r=>{e().then(r,e=>{r(e)})};describe("sample.js",()=>{it("should return Hello World",e(async()=>{const e=require("../exercises/sample");try{e.run().should.equal("Hello World")}catch(e){throw e}}))}),describe("csvToArray.js",()=>{it("should return the correct array of objects with a csv with no spaces",e(async()=>{const e=require("../exercises/csvToArray");try{const r=e.run("FirstName,LastName,Age/nDan,Tran,29/nDon,Tran,25/nJasmine,Tran,13");r.should.be.a("array"),r.length.should.equal(3),r[0].should.have.property("FirstName"),r[0].should.have.property("LastName"),r[0].should.have.property("Age"),r[0].FirstName.should.equal("Dan"),r[0].LastName.should.equal("Tran"),r[0].Age.should.equal("29"),r[1].should.have.property("FirstName"),r[1].should.have.property("LastName"),r[1].should.have.property("Age"),r[1].FirstName.should.equal("Don"),r[1].LastName.should.equal("Tran"),r[1].Age.should.equal("25"),r[2].should.have.property("FirstName"),r[2].should.have.property("LastName"),r[2].should.have.property("Age"),r[2].FirstName.should.equal("Jasmine"),r[2].LastName.should.equal("Tran"),r[2].Age.should.equal("13")}catch(e){throw e}})),it("should return the correct array of objects with a csv with spaces",e(async()=>{const e=require("../exercises/csvToArray");try{const r=e.run("Company Name,Ticker Symbol,Price Paid,Quantity/nGENERAL ELECTRIC,GE,12,100/nVisa,V,100,10/nJP Morgan,JPM,13,123");r.should.be.a("array"),r.length.should.equal(3),r[0].should.have.property("Company Name"),r[0].should.have.property("Ticker Symbol"),r[0].should.have.property("Price Paid"),r[0].should.have.property("Quantity"),r[0]["Company Name"].should.equal("GENERAL ELECTRIC"),r[0]["Ticker Symbol"].should.equal("GE"),r[0]["Price Paid"].should.equal("12"),r[0].Quantity.should.equal("100"),r[1].should.have.property("Company Name"),r[1].should.have.property("Ticker Symbol"),r[1].should.have.property("Price Paid"),r[1].should.have.property("Quantity"),r[1]["Company Name"].should.equal("Visa"),r[1]["Ticker Symbol"].should.equal("V"),r[1]["Price Paid"].should.equal("100"),r[1].Quantity.should.equal("10"),r[2].should.have.property("Company Name"),r[2].should.have.property("Ticker Symbol"),r[2].should.have.property("Price Paid"),r[2].should.have.property("Quantity"),r[2]["Company Name"].should.equal("JP Morgan"),r[2]["Ticker Symbol"].should.equal("JPM"),r[2]["Price Paid"].should.equal("13"),r[2].Quantity.should.equal("123")}catch(e){throw e}}))}),describe("gHappy.js",()=>{it("should return true for xxgggxyz",e(async()=>{const e=require("../exercises/gHappy");try{e.run("xxgggxyz").should.equal(!0)}catch(e){throw e}})),it("should return false for xxgggxyg",e(async()=>{const e=require("../exercises/gHappy");try{e.run("xxgggxyg").should.equal(!1)}catch(e){throw e}})),it("should return false for xxggyygxx",e(async()=>{const e=require("../exercises/gHappy");try{e.run("xxggyygxx").should.equal(!1)}catch(e){throw e}})),it("should return true for xxgggxygg",e(async()=>{const e=require("../exercises/gHappy");try{e.run("xxgggxygg").should.equal(!0)}catch(e){throw e}}))}),describe("errorHandlingI.js",()=>{it("should return error properly",e(async()=>{const e=require("../exercises/errorHandlingI");try{throw await e.run("https://www.omdbapi.com/?t=Matrix&y=&plot=short&apikey="),new Error("sooper dooper pooper scooper")}catch(e){e.should.equal("Request failed with status code 401")}})),it("should return error properly",e(async()=>{const e=require("../exercises/errorHandlingI");try{throw await e.run("https://www.api.com/?"),new Error("sooper dooper pooper scooper")}catch(e){e.should.equal("Hostname/IP does not match certificate's altnames: Host: www.api.com. is not in the cert's altnames: DNS:*.gelifesciences.com, DNS:gelifesciences.com")}}))}),describe("errorHandlingII.js",()=>{it("should return error properly",e(async()=>{const e=require("../exercises/errorHandlingII");try{(await e.run("https://www.omdbapi.com/?t=Matrix&y=&plot=short&apikey=")).should.equal("Error: Request failed with status code 401")}catch(e){throw e}})),it("should return error properly",e(async()=>{const e=require("../exercises/errorHandlingII");try{(await e.run("https://www.api.com/?")).should.equal("Error: Hostname/IP does not match certificate's altnames: Host: www.api.com. is not in the cert's altnames: DNS:*.gelifesciences.com, DNS:gelifesciences.com")}catch(e){throw e}}))}),describe("loneSome.js",()=>{it("should return 6 for (1, 2, 3)",e(async()=>{const e=require("../exercises/loneSome");try{const r=await e.run(1,2,3);r.should.be.a("number"),r.should.equal(6)}catch(e){throw e}})),it("should return 9 for (4, 2, 3)",e(async()=>{const e=require("../exercises/loneSome");try{const r=await e.run(4,2,3);r.should.be.a("number"),r.should.equal(9)}catch(e){throw e}})),it("should return 0 for (3, 3, 3)",e(async()=>{const e=require("../exercises/loneSome");try{const r=await e.run(3,3,3);r.should.be.a("number"),r.should.equal(0)}catch(e){throw e}})),it("should return 9 for (9, 2, 2)",e(async()=>{const e=require("../exercises/loneSome");try{const r=await e.run(9,2,2);r.should.be.a("number"),r.should.equal(9)}catch(e){throw e}})),it("should return 9 for (2, 9, 2)",e(async()=>{const e=require("../exercises/loneSome");try{const r=await e.run(2,9,2);r.should.be.a("number"),r.should.equal(9)}catch(e){throw e}})),it("should return 9 for (9, 2, 2)",e(async()=>{const e=require("../exercises/loneSome");try{const r=await e.run(2,2,9);r.should.be.a("number"),r.should.equal(9)}catch(e){throw e}}))}),describe("moviesDetail.js",()=>{it("should return all the movie details",e(async()=>{const e=require("../exercises/moviesDetails");try{const r=await e.run(["https://www.omdbapi.com/?t=Mr.%20Nobody&y=&plot=short&apikey=trilogy","https://www.omdbapi.com/?t=Greatest%20Showman&y=&plot=short&apikey=trilogy","https://www.omdbapi.com/?t=Pulp%20Fiction&y=&plot=short&apikey=trilogy"]);r.should.be.a("array"),r.length.should.equal(3),r[0].should.be.a("object"),r[0].should.have.property("Title"),r[0].Title.should.equal("Mr. Nobody"),r[0].should.have.property("Year"),r[0].Year.should.equal("2009"),r[0].should.have.property("Genre"),r[0].Genre.should.equal("Drama, Fantasy, Romance, Sci-Fi"),r[1].should.be.a("object"),r[1].should.have.property("Title"),r[1].Title.should.equal("The Greatest Showman"),r[1].should.have.property("Year"),r[1].Year.should.equal("2017"),r[1].should.have.property("Genre"),r[1].Genre.should.equal("Biography, Drama, Musical"),r[2].should.be.a("object"),r[2].should.have.property("Title"),r[2].Title.should.equal("Pulp Fiction"),r[2].should.have.property("Year"),r[2].Year.should.equal("1994"),r[2].should.have.property("Genre"),r[2].Genre.should.equal("Crime, Drama")}catch(e){throw e}}))}),describe("subSum.js",()=>{it("should return 11 with for (2, 2)",e(async()=>{const e=require("../exercises/subSum");try{const r=e.run(2,2);r.should.be.a("number"),r.should.equal(11)}catch(e){throw e}})),it("should return 6 with for (1, 2)",e(async()=>{const e=require("../exercises/subSum");try{const r=e.run(1,2);r.should.be.a("number"),r.should.equal(6)}catch(e){throw e}})),it("should return 9 with for (2, 1)",e(async()=>{const e=require("../exercises/subSum");try{const r=e.run(2,1);r.should.be.a("number"),r.should.equal(9)}catch(e){throw e}}))})});
