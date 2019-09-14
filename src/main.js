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
        let firstName = body.data[i].profile.first_name;
        let lastName = body.data[i].profile.last_name;
        let title = body.data[i].profile.title;
        let street = body.data[i].practices[0].visit_address.street;
        let city = body.data[i].practices[0].visit_address.city;
        let state = body.data[i].practices[0].visit_address.state;
        let zip = body.data[i].practices[0].visit_address.zip;
        let phone = body.data[i].practices[0].phones[0].number;
        let newPatients;
        if (body.data[i].practices.accepts_new_patients === true) {
          newPatients = 'yes';
        } else {
          newPatients = 'no';
        }

          doctorList.push(
            `<div class=" results">
            <div class="card">
            <h5 class="name">Doctor: ${firstName} ${lastName} ${title}</h5>
            <div class="address">Address:<br>${street}<br>${city}, ${state} ${zip}</div>
            <div class="phoneNumber">Phone: ${phone}</div>
            <div class="website">Website: </div>
            <div class="new">Accepting New Patients: ${newPatients}</div>
            </div>
            </div>`);
      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
