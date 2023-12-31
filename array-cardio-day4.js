// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's

      
            const result = inventors.filter((element) => (element.year >= 1500 && element.year <1600))
            console.log(result)

      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names

        const newArray = inventors.map((element) => console.log(`${element.first} ${element.last}`))

        

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest

        // if the current person's year is greater than the next person's year, move them to the right one in the array, otherwise, move them to the left in the array 
        let ageArray = inventors.sort((a,b) => a.year > b.year ? 1 : -1)
        console.log(ageArray)



      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?

        const yearsLived = inventors.map((element) => (element.passed - element.year))
        let sumOfYears = yearsLived.reduce((a, b) => a + b, 0)
        console.log(sumOfYears)


        //another way

          // let yearsLived = inventors.reduce((total, inventor) => {
          //   return total + (inventor.passed - inventor.year)
          // }, 0)


      // 5. Sort the inventors by years lived
        console.log(yearsLived.sort())
    

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

        //Query select the item that holds all the streets on the page
        let item = document.querySelector('.mw-category')
        //find all the links inside of the dom element we selected
        let links = item.querySelectorAll('a')
        //convert into an array bc this will return a node list
        let linksArray = Array.from(links)
        //Map through each link and create a new array with the text content of that link
        let streetName = linksArray.map(link => link.textContent)
        //filter through the text content to see which ones include 'de'
        let de = streetName.filter(street => street.includes('de'))


    

      // 7. sort Exercise
      // Sort the people alphabetically by last name

      let names = inventors.map((element) => (`${element.last} ${element.first}`))
      console.log(names.sort())


      // 8. Reduce Exercise
      // Sum up the instances of each of these
    let data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    let typeOfTransportation = data.reduce(function(obj, item) {
        if(!obj[item]){ //if the name of that mode of transport doesn't already exists in the object, add it and set it's value = 0
            obj[item] = 0 
        }
        obj[item]++ //once in the object, add one to it's value
        return obj
    }, {}) //empty object to pass values into. This is what we are starting with.... an empty object.

    console.log(typeOfTransportation)

