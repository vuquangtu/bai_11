document.write("<table border = 1>");
for (r = 1; r < 10; r++) {
  document.write("<tr>");
  for (c = 2; c < 10; c++) {
    document.write("<td>" + c + "x" + r + "=" + c * r + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
