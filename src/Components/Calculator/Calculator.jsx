import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import './calculator.css'
import white_arrow from '../../assets/white-arrow.png'

import { data } from '../Data/data.jsx';

const Campus = () => {
    const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = data.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item["Common Name"].toLowerCase().includes(search);
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="campus">
        <div className="contact-page-wrapper" id="Try-now">
      <Form className="contact-form-container">
        <InputGroup className="my-3" />
        <Form.Control
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tree Species..."
        />
      </Form>
      <Table bordered hover className="thin-borders">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Scientific Name</th>
            <th>Common Name</th>
            <th>CO2 Absorption kg/year</th>
            <th>O2 released per year kg/year</th>
            <th>Distance Between Trees (ft)</th>
            <th>Growth Time for Full Growth</th>
            <th>Number of Trees Per acre</th>
            <th>Region</th>
            <th>Tree Size</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.Sl}>
              <td>{item.Sl}</td>
              <td>{item["Scientific Name"]}</td>
              <td>{item["Common Name"]}</td>
              <td>{item["CO2 Absorption kg/year"]}</td>
              <td>{item["O2 released per year kg/year"]}</td>
              <td>{item["Distance Between Trees (ft)"]}</td>
              <td>{item["Growth Time for Full Growth"]}</td>
              <td>{item["Number of Trees Per acre"]}</td>
              <td>{item.Region}</td>
              <td>{item["Tree Size"]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination-controls">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <span> Page {currentPage} of {totalPages} </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>

    </div>
    )
}

export default Campus