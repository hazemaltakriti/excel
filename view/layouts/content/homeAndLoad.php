<style>
.modal-content
{
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    background: #6c3131;
}
.modal h4
{
    color:white;
}
#loadinterface .label
{
    font-size:1.5em;
    color:white;    
}
#loadinterface .label:hover
{
   background:#f0ad4e !important;
   -webkit-transition: background 1s;
   -moz-transition: background 1s ;
   transition: background 1s ;s
}
#note
{
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}
 .modal-content
{
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    background: #3d3d3d;
}
.modal-body span
{
    font-size: 0.8em;
    font-family: monospace;
    
}
#sheets
{
    float:left;
}
#newsheet
{
    float:right;
}


</style>

<div class='clearfix'></div>
<!-- user table  !-->
<div class='dt-buttons'>

</div>
   <div class="table-responsive" id='exceltable'>
        <table  id='sheet1' class='display nowrap'>
            <thead>
            </thead>
            <tbody >
                        <tr style='display:none'>
                            <td> <input type="text" > </td>
                        </tr>
            </tbody>
        </table>
    </div>
    <!-- buttn for add new sheet !-->
    <div class='' id='sheets' style=''>
        <button class='btn btn-success'> sheet1</button>
    </div>
    <div class='' id='newsheet'>
        <button class='btn btn-default'>new sheet</button>
    </div>
    <!-- end buttn add news sheet !-->
    <!-- buttn for add new sheet !-->

    <!-- end buttn add news sheet !-->
<!-- end user table  !-->
<!-- jQuery library -->

   
  


<!--  dropdown table !-->
    <div class="dropdown collapse open" id='tableDropdown' >
        
        <ul class="dropdown-menu" role="menu" >
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">copy</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">remove content</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">paste</a></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">note</a></li>
            <li role="presentation" class="divider"></li>
            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Close</a></li>
        </ul>   
    </div>
 <!--  end drop down table !-->
<!-- note style -->
    <div id='note' class='collapse'>
    
        <span  style='bottom:25px;' id='removenote'> <li class='fa fa-trash-o'></li> </span>
        <span  id='savenote'> <li class='fa fa-save'></li> </span>
        <textarea name="" id="" cols="30" rows="10" class='form-control btn-primary' placeholder=''></textarea>
    </div>
<!-- end note style -->
<!-- button for calling alert modal!-->
    <button type="button" class="collapse" id='alertbtn' data-toggle="modal" data-target="#alert"></button>
<!--  end alert button  !-->

<!--- alert modal  !-->
    <div class="modal fade" id="alert" role="dialog">
        <div class="modal-dialog">
            
            <!-- Modal content-->
            <div class="modal-content" style='background:ghostwhite'>
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger alert-dismissible">
                    
                        <strong>Danger!</strong> <p class='error'></p>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
            </div>
            
        </div>
    </div>
<!-- end alert modal !-->


<!-- Trigger the modal with a button -->

<!-- Modal for file name -->
 <div class="modal fade" id="savegetfilename" role="dialog">
    <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
                <div class="form-group">
                    <input placeholder='Enter Your FileName' type="text" id='inputgetfilename' class='form-control'>
                </div>
               
        </div>
        <div class="modal-footer">
            <div>
             <button class='btn btn-primary' id='save'>Save</button>
            </div>        
        </div>
    </div>
    </div>
    </div>
</div>
<!--End File Name!-->

<!-- loadInterface  -->

  <!-- Modal -->
  <div class="modal fade" id="loadinterface" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Load Pages</h4>
        </div>
        <div class="modal-body" >
            <?php foreach( $oldProjects as $oldProject ): ?>
                <a href="<?php echo WEBSITE_NAME . "/user/load/" . $oldProject; ?>" style='padding:10px;'>
                    <button class="btn btn-primary form-control"><?php  echo $oldProject ;?> <i class="fa fa-folder-open"></i></button> 
                </a>
            <?php  endforeach; ?>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!--!-->