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
    // let address = [];
    // let phone = [];
    // let newPatients = [];
    console.log(docName);
    promise.then(function(response) {
      let body = JSON.parse(response);
      for (var i = 0; i < body.data[i].length; i++) {
        for (var j = 0; i < body.data[i].profile[j].length; i++) {
          docName.push(body.data[i].profile[j].first_name)
        }

        // phone.push(body.data[i].practices[i].phones[i])
        // newPatients.push(body.data[i].practices[i].accepts_new_patients)

      }
      $('.firstName').text(body.data[i].profile[j].first_name);
      // ${'.address'}.text(body.data[i].practices[i].visit_address)
      // $('.phone').text(body.data[i].practices[i].phones[i]);
      // $('.newPatients').text(body.data[i].practices[i].accepts_new_patients)
    }, function(error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
