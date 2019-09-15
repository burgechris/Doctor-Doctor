import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctor } from './doctor';

$(document).ready(function() {
  $('#searchMe').submit(function(event) {
    event.preventDefault();
    $(".noResult").hide();
    $('.results').text('');

    let name = $('#docName').val();
    let symptom = $('#symptom').val();

    let docSearch = new BetterDoctor();
    let promise = docSearch.getDoctor(name, symptom);

    promise.then(function(response) {
      const body = JSON.parse(response);

      let doctorList = [];
      console.log(doctorList);

      if (body.data.length === 0) {
        $(".noResult").show();
      } else {
        for (var i = 0; i < body.data.length; i++) {
          let firstName = body.data[i].profile.first_name;
          let lastName = body.data[i].profile.last_name;
          let title = body.data[i].profile.title;
          let street = body.data[i].practices[0].visit_address.street;
          let city = body.data[i].practices[0].visit_address.city;
          let state = body.data[i].practices[0].visit_address.state;
          let zip = body.data[i].practices[0].visit_address.zip;
          let phone = body.data[i].practices[0].phones[0].number;
          let website;
          if (body.data[i].practices[0].website) {
            website = body.data[i].practices[0].website;
          } else {
            website = 'No website listed'
          }
          let newPatients;
          if (body.data[i].practices[0].accepts_new_patients) {
            newPatients = 'Currently accepting new patients!';
          } else {
            newPatients = 'Sorry, not accepting new patients at this time.';
          }

          doctorList.push(
            `<div class="card text-white bg-primary">
            <div card-body>
            <h3 class="card-text card-title" id="name">${firstName} ${lastName} ${title}</h3>
            <h6 class="card-text" id="phoneNumber">Phone: ${phone}</h6>
            <p class="card-text" id="address">Address:<br>${street}<br>${city}, ${state} ${zip}</p>
            <a class="card-text" id="website">Website: ${website}</a>
            <p class="card-text"><small class="text-green" id="new">${newPatients}</p></small>
            </div>
            </div>`);
          }

          for (var x = 0; x < doctorList.length; x++) {
            $('.results').append(doctorList[x]).show();
          }
      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
