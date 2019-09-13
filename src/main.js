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

    let docName = [];
    let docAddress = [];
    let docPhone = [];
    let newPatients = [];
    console.log(docName);
    console.log(docPhone);
    console.log(newPatients);
    promise.then(function(response) {
      let body = JSON.parse(response);
      for (var i = 0; i < body.data[0].practices.length; i++) {
        docName.push(body.data[0].practices[i].name)
        docPhone.push(body.data[0].practices[i].phones[0])
        newPatients.push(body.data[0].practices[i].accepts_new_patients)

      }
      $('.firstName').text(body.data[i])
    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
