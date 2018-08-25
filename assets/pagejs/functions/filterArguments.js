function filterArguments()
{
    this.filterFromNotNumber = function(args)
    {
        args = Array.from(args);
        args = args.filter(function(e)
        {
            return typeof e == "number";
        });
        return args;
    }
    return this;
}