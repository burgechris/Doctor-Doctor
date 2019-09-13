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
      for (var i = 0; i < body.data.length; i++) {
        $('.results').append(
          `<div class=" results">
            <div class="card">
              <h5 class="name"></h5>
              <div class="address"></div>
              <div class="phoneNumber"></div>
              <div class="website"></div>
              <div class="new"></div>
            </div>
          </div>`)

          $('.name').text(`${body.data[i].profile.first_name}`)

      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
