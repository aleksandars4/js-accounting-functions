function PaymentDateScheduling() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName('Januar'); // DON'T FORGET TO CHANGE THE SHEET NAME
  
    // INVOICES ARRAY ---------------------- ALWAYS CHANGE THE INVOICES ARRAY
    var invoices = ['459741578',
    '459741578',
    '459741734',
    '460801427',
    '461369218',
    '461556296',
    '461646219',
    '461664726',
    '461681277',
    '461940025',
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
          sheet.getRange(row + 1, values[row].length).setBackground('rgba(255,154,42,255)');
          // WRITING "Paid out on -||-" IN THE LAST CELL (ASSUMING COLUMN J)
          sheet.getRange(row + 1, values[row].length).setValue('Scheduled payment date 2/16/24');   //CHANGE THE PAID OUT DATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
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