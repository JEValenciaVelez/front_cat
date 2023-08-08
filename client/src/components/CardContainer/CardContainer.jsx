import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import axios from "axios";

const CardContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [cats, setCats] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    
    const fetchCats = async () => {

      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/breeds"
        );
        setCats(response.data);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCats();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e) => {
    if (e.target.name === "itemsPerPage") {
      setItemsPerPage(parseInt(e.target.value));
      setCurrentPage(1);
    }
  };

  return (
    <div className="Card-container">
      <div className="items-per-page">
        <label htmlFor="itemsPerPage">Cantidad de ítems por página:</label>
        <select onChange={handleChange} name="itemsPerPage" value={itemsPerPage}>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
      <Card cats={cats.slice(indexOfFirstItem, indexOfLastItem)} />
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={cats.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CardContainer;
