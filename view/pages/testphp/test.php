<header>
<link href="<?php   echo ASSET; ?>/css/bootstrap.min.css" rel="stylesheet">

</header>
<style>
    .well
    {
        margin:5px ;
    }
    .well,.alert
    {
        margin-bottom:0px !important; 
    }
    h2
    {
        margin: 0px !important;
    }
</style>
<?php
$xml=simplexml_load_file("aa.xml") or die("Error: Cannot create object");
$removeString  =  dirname( dirname( dirname(__DIR__) ) );
?>
    <div id='resulttestcase'>
        <?php foreach(  $xml->testsuite->testsuite as $testsuite):   ?>
        <div id="<?php echo $testsuite['name']  ?>">
                <?php foreach( $testsuite->testcase as $testcase ):   ?>
                    
                    <h2 class="well text-center text-primary text-capitalize">Function test case
                        <span><?php  echo $testcase['class']  , '::' ,   $testcase['name'];    ?>
                        </span>
                    </h2>
                    <div class="<?php if(  count($testcase->failure) == 0  ) echo "alert-success" ; else  echo "alert-danger"    ?> alert text-capitalize">
                        <strong>case #<?php  echo $testcase['Asertion'] ?>:</strong>
                        <b> <span> <?php echo $testcase->failure  ; if(  count($testcase->failure) == 0  ) echo "every thing is ok"; ?>  </span><b>
                    </div>
                    <div class="alert alert-info">Function 
                                                    <?php echo  str_replace( "test" , "" , $testcase['name']  ) ?>
                                                    : Assertion: <?php echo $testcase['assertions'] ; ?> failure:<?php echo count( $testcase->failure ); ?></div>
                    <?php endforeach;  ?>
                </div>
        <?php endforeach;  ?>
    </div>