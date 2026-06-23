
        let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
        companies.shift("Bloomberg");
        companies.splice(2,1,"Ola");
        companies.push("Amazon");
        console.log(companies);
