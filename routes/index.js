
/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.render('index', {title: 'Express'});
  res.render('index', {
    title: 'Sample Project',
    inputs : [
      { name: 'name', label: 'Full Name: ', placeholder: 'Rex Cheng' },
      { name: 'email', label: 'Email: ', placeholder: 'rex@racerxfactor.com' }
    ]
  });
};