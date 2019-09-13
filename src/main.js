import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctor } from './doctor';

$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    let name = $('#docName').val();
    let condition = $('#cond').val();


    let docSearch = new BetterDoctor();
    let promise = docSearch.getDoctor(name, condition);

    let doctors = [];
    console.log(doctors);
    promise.then(function(response) {
      let body = JSON.parse(response);
      for (var i = 0; i < body.data.length; i++) {
        doctors.push(body.data[i].practices)
        // console.log(body.data[i].practices);
      }
      $('.firstName').append(body.data[0].practice[i].name)
    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
