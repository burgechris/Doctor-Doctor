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
        $('.firstName').text(body.data[i].profile.first_name)
        $('.lastName').text(body.data[i].profile.last_name)
        $('.title').text(body.data[i].profile.title)

      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
