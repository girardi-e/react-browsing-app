import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        <label>
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>Choose animal</option>
            
            {
              ANIMALS.map((animal) => (
              <option value={animal} key={animal}>{animal}</option>
              ))
            }

          </select>
        </label>

        <label>
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option>Choose breed</option>
            
            {
              breeds.map((breed) => (
              <option value={breed} key={breed}>{breed}</option>
              ))
            }

          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;