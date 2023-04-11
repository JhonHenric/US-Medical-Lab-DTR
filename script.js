function addToSheet(data) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Time Records");
    sheet.appendRow(data);
  }
  