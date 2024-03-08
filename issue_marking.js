function IssueMarking() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName('Januar'); // DON'T FORGET TO CHANGE THE SHEET NAME
  
    // INVOICES ARRAY ---------------------- ALWAYS CHANGE THE INVOICES ARRAY
    var invoices = ['460002020',
    '460181653',
    '460589327',
    '460883152',
    '461023955',
    '461119287',
    '461212480',
    '461326940',
    '461327007',
    '461470761',
    '461535548',
    '461660883',
    '461671906',
    '461672397',
    '461673067',
    '461677888',
    '461796144',
    '461805443',
    '461821868',
    '461840247',
    '461922878',
    '461926642',
    '461944552',
    '461955789',
    '461965464',
    '461997398',
    '462108034',
    '462210210',
    '462219626',
    '462226292',
    '462274490',
    '462344098',
    '462356883',
    '462377056',
    '462405121',
    '462508908',
    '462514378',
    '462526731',
    '462573445',
    '462577383',
    '462596605',
    '462605453',
    '462612943',
    '462618238',
    '462684645',
    '462717669',
    '462761615',
    '462814386',
    '462846138',
    '462886492',
    '462971210',
    '462974176',
    '463016254',
    '463018205',
    '463039925',
    '463046706',
    '463112895',
    '463164909',
    '463177835',
    '463305555',
    '463604243',
    ];
    
    // FINDING VALUES
    var range = sheet.getDataRange();
    var values = range.getValues();
  
    var invoicesNotFound = []; // Store invoices not found in the spreadsheet
  
    // LOOP THROUGH INVOICES AND TABLE CELLS
    for (var i = 0; i < invoices.length; i++) {
      var invoiceArray = invoices[i];
      var invoiceFound = false; // Flag to check if the invoice is found in the table
  
      for (var row = 0; row < values.length; row++) {
        var currentInvoice = values[row][2].toString(); // ASSUMING DATA IS IN THE 2nd COLUMN
        if (invoiceArray.indexOf(currentInvoice) !== -1) {
          invoiceFound = true;
          // IF THE NUMBER IS FOUND, FILL IT IN GREEN
          sheet.getRange(row + 1, values[row].length).setBackground('rgba(254,254,63,255)');
          // WRITING "Paid out on -||-" IN THE LAST CELL (ASSUMING COLUMN J)
          sheet.getRange(row + 1, values[row].length).setValue('ISSUE');   //CHANGE THE PAID OUT DATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        }
      }
  
      if (!invoiceFound) {
        invoicesNotFound.push(invoiceArray); // Add the invoice to the list of invoices not found in the table
      }
    }
  
    // Log the invoices not found in the spreadsheet
    if (invoicesNotFound.length > 0) {
      console.log("The following invoices were not found in the spreadsheet:");
      for (var j = 0; j < invoicesNotFound.length; j++) {
        console.log(invoicesNotFound[j]);
      }
    }
}