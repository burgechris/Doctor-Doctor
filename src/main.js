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

    promise.then(function(response) {
      const body = JSON.parse(response);

      let doctorList = [];
      console.log(doctorList);

      for (var i = 0; i < body.data.length; i++) {
        doctorList.push(body.data[i].profile.first_name);
        doctorList.push(body.data[i].profile.last_name);
        doctorList.push(body.data[i].profile.title);
        doctorList.push(body.data[i].practices[0].visit_address.street);
        doctorList.push(body.data[i].practices[0].visit_address.city);
        doctorList.push(body.data[i].practices[0].visit_address.state);
        doctorList.push(body.data[i].practices[0].visit_address.zip);
        doctorList.push(body.data[i].practices[0].phones[0].number);

        // if (body.data[i].practices.accepts_new_patients === true) {
        //   return 'yes';
        // } else {
        //   return 'no';
        // }
        //
        // $('.name').text(`${firstName} ${lastName} ${title}`);
        //
        // $('.results').append(
        //   `<div class=" results">
        //   <div class="card">
        //   <h5 class="name"></h5>
        //   <div class="address"></div>
        //   <div class="phoneNumber"></div>
        //   <div class="website"></div>
        //   <div class="new"></div>
        //   </div>
        //   </div>`)
      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
