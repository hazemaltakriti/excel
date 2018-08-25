function ExportTable()
{
    //function will used in conifgExport
    this._getHtmlSheetByIndex = function(index)
    {
        var newtbl = $('<table></table>');
        var table = $('#exceltable').children('table').eq(index);
        var rows = table.children('tbody').children('tr');
        var firstrowinput = rows.eq(1).find('input');
        var thead = $("<thead></thead>");
        var theadrow =$("<tr></tr>");
        var tbody = $('<tbody></tbody>');
        var tbodyrow = table.children('tbody').children('tr:gt(1)');
        thead.append(theadrow);
        //first row for set thead of table
        firstrowinput.each(function()
        {   
           var newcol = "<td>"+$(this).val()+"</td>";
            theadrow.append(newcol);
        });
        //set tbody of table            
        tbodyrow.each(function()
        {   
            var newrow = $("<tr></tr>");
            $(this).find('input').each(function()
            {   
                var newcol = "<td>"+$(this).val()+"</td>";
                newrow.append(newcol);
            });
            tbody.append(newrow);
        });
        //end tbody of table
        newtbl.append(thead);
        newtbl.append(tbody);
        return newtbl;
    }
    //function for conifguration function before export 
    this._conifgExport = function()
    {
        var tables     = [];

        var temptables = [];

        for(var i= 0; i<$('#exceltable').children('table').length; i++ )
        {
            temptables.push( this._getHtmlSheetByIndex(i) );
        }

        for(var i in temptables)
            tables[i] = temptables[i];

        return tables;
    }
    this.export2excel = function()
    {
        var self = this;
        $('body').on('click','#export',function()
        {   
            configuredsheet = self._conifgExport();
            var sheetsnames = [] ;
            for(var i in configuredsheet.length )
            {
                sheetsnames[i] = "sheet" + (i+1);
            }
            tablesToExcel(configuredsheet,sheetsnames);
        });
    }
    this.command = function()
    {
        this.export2excel();        
    }
}
