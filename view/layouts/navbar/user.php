<style>
    #File:hover .options {
        display: block !important;
    }

    .options {
        cursor: pointer;
    }

    .class-align-right {
        text-align: right;
    }

    .class-align-center {
        text-align: center;
    }
    .fa-item
    {
        cursor:pointer
    }
</style>
<link href="<?php   echo ASSET; ?>/css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
<link href="<?php   echo ASSET; ?>/pagecss/navbaricons.css" rel="stylesheet">
<div class=''>
    <ul class="nav nav-tabs">
        <li class="active">
            <a data-toggle="tab" href="#home">
            Home
            </a>
        </li>
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">File <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#" data-toggle='modal' data-target="#savegetfilename">Save <i class='fa fa-save'></i> </a></li>
                <li><a href="#" data-toggle="modal" data-target="#loadinterface">Load  <i class="fa fa-get-pocket"></i></a></li>
                <li><a href="#" id='export'>Export To Excel <i class='fa fa-file-excel-o'></i></a></li>
            </ul>
        </li>

        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Insert <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li>
                    <a href="">                
                        <label for="insertimg" class=''>
                            <input type="file" access='png' id='insertimg' accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|images/*"  style='display:none' class='collapse'>
                            Image <i class="fa fa-picture-o"></i> 
                        </label>
                    </a>

                    <!--   <a href="#" id=''>Image <i class="fa fa-picture-o"></i> 
                    
                    </a> -->
                </li>

            </ul>
        </li>
        
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Filters <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#" id='filterrowaccordingvalue'>Filter According Value</i> <i class="fa fa-filter"></i></a></li>

            </ul>
        </li>

        <!--    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li> -->

        <li><a data-toggle="tab" href="#menu3"> Styles Cells </a></li>
    
        <li style=" ">
            <a href="<?php  echo WEBSITE_NAME  ?>/user/signout" style='' > log out   <i class='fa fa-sign-out' ></i> </a>
        </li>

        <li style="    position: absolute;  right: 10px; ">
            <a href="#" style='' > <?php echo $_SESSION['username'] ?> <i class='fa fa-user' ></i>  </a> 
        </li>

    </ul>

    <div class="tab-content">
        <div id="home" class="tab-pane fade in active">

        </div>
       
     
        <div id="menu3" class="tab-pane fade">
            <div class='col-lg-12'>
                <div class="fa-item col-md-2 col-sm-4">
                    <i class="fa fa-align-center" id = "fa-align-center"></i> align-center
                </div>
                <div class="fa-item col-md-2 col-sm-4">
                    <i class="fa fa-align-justify" id = "fa-align-justify"></i> align-justify
                </div>
                <div class="fa-item col-md-2 col-sm-4">
                    <i class="fa fa-align-left" id = "fa-align-left" ></i> align-left
                </div>
                <div class="fa-item col-md-2 col-sm-4">
                    <i class="fa fa-align-right" id = "fa-align-right"></i> align-right
                </div>
                <div class="fa-item col-md-2 col-sm-4">
                    <i class="fa fa-bold" id = "fa-bold"></i> bold
                </div>
                <div class="fa-item col-md-2 col-sm-4">
                    <i class="fa fa-italic" id = "fa-italic"></i> italic
                </div>
                <div class="fa-item col-md-2 col-sm-4">
                    <i class="fa fa-underline" id = "fa-underline"></i> underline
                </div>
                <div class="fa-item col-md-2 col-sm-4">
                    
                </div>
            </div>
            <div class="col-lg-12 bg-primary" style="height: 15px;"></div>
        </div>

    </div>
</div>
<script>
    $(".fa-item").click(function () {
        var className = $(this).children('i').attr('id').replace('fa', 'class');
        $(".selected").toggleClass(className);
    });

</script>