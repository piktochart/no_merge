chrome.extension.sendMessage({}, function( response ) {
  var readyStateCheckInterval = setInterval( function() {
    if ( document.readyState === 'complete' ) {
      clearInterval( readyStateCheckInterval );

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading

      setInterval( function() {
        var the_button = document.getElementsByClassName( 'js-merge-branch-action' )[0];

        if ( the_button ) {
          // get the parent first
          var the_parent = the_button.parentNode;

          // remove the merge button
          the_button.remove();

          // then replace with a normal button
          var new_button = document.createElement( 'button' );
          new_button.innerHTML = 'No Merge';
          new_button.addEventListener( 'click', function() {
            alert( 'Thou shalt not merge!' );
          }, false );
          the_parent.appendChild( new_button );
        }
      }, 1000 );

      // ----------------------------------------------------------

    }
  }, 10 );
});
