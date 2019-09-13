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
      // $('.results').append(
        //   `<div class=" results">
        //     <div class="card">
        //       <h5 class="name"></h5>
        //       <div class="address"></div>
        //       <div class="phoneNumber"></div>
        //       <div class="website"></div>
        //       <div class="new"></div>
        //     </div>
        //   </div>`)
    
      for (var i = 0; i < body.data.length; i++) {
        let firstName = body.data[i].profile.first_name;
        let lastName = body.data[i].profile.last_name;
        let title = body.data[i].profile.title;

        for (var j = 0; j < body.data[i].practices.length; j++) {
          let street = body.data[i].practices[j].visit_address.street;
          let city = body.data[i].practices[j].visit_address.city;
          let state = body.data[i].practices[j].visit_address.state;
          let zip = body.data[i].practices[j].visit_address.zip;
          let phone = body.data[i].practices[j].phones.number;
        }


      }

    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
