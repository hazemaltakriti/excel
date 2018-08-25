//function with do managing for all initial classes
function Manager()
{

    this.layoutHomeAndLoad = function()
    {
        var processingfunction = new ProcessingFunction();
        var save = new Save();
        var richtext = new RichText();
        var exporttable = new ExportTable();
        var contextmenue= new ContextMenue();

        processingfunction.command();
        save.command();
        richtext.command();
        exporttable.command();
       contextmenue.command();
    }

    this.mainHome = function()
    {
        this.layoutHomeAndLoad();
        var table = new Table();
        table.command();
        table.print();
        var filters  = new Filters();
        filters.command();
    }

    this.mainLoading = function()
    {
        this.layoutHomeAndLoad();
        var load = new Load();
        load.loading();
        var filters  = new Filters();
        filters.command();
    }
    
}