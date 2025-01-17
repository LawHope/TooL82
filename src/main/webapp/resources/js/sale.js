
// email
$('#email3').on('change', function() {
    let val = $('#email3 option:selected').text();
    if (val == '직접입력하기') {
        $('#email2').attr('readonly', false);
        $('#email2').val('');
    } else { (val != '직접입력하기')
        $('#email2').attr('readonly', true);
        $('#email2').val(val);
    }
});


// sale if
$('#sellbtn').on('click', function() {
    if ($('#category').val() == '' || $('#category').val() == '기본 분류 선택')
        document.querySelector('#cat_warn').innerHTML =
            '<font color = #dc143c>판매할 서비스를 설정해주세요</font>'
    else if (
        document.querySelector('#cat_warn').innerHTML ='');

    else if  ($('#title').val() == '' || $('#title').val() == '제품 이름')
        document.querySelector('#tit_warn').innerHTML=
            '<font color = #dc143c>제품 이름을 작성해주세요</font>'
    else if (
        document.querySelector('#tit_warn').innerHTML='');

    else if ($('#party').val() == '' || $('#party').val() == '총 인원수' || $('#party').val() <= 9)
        document.querySelector('#prt_warn').innerHTML=
            '<font color = #dc143c>최소 10명부터 모집해야합니다.</font>'
    else if (
        document.querySelector('#prt_warn').innerHTML='');

    else if ($('#email1').val() == '' || $('#email1').val() == '이메일을 입력해주세요' || $('#email2').val() == '')
        document.querySelector('#em_warn').innerHTML=
            '<font color = #dc143c>이메일을 작성해주세요.</font>'
    else if (
        document.querySelector('#em_warn').innerHTML='');

    else if ($( "#sdate" ).val() >= $( "#edate" ).val())
        document.querySelector('#dt_warn').innerHTML=
            '<font color = #dc143c>최소 하루 이상의 기간을 두어야합니다.</font>';

    else if (
        document.querySelector('#dt_warn').innerHTML='');

    else if ($('#oprice').val() == '' || $('#oprice').val() == '금액입력')
        document.querySelector('#op_warn').innerHTML=
            '<font color = #dc143c>금액은 비울 수 없습니다.</font>';

    else if ($('#oprice').val() <= $('#sprice').val())
        document.querySelector('#op_warn').innerHTML=
            '<font color = #dc143c>정가는 판매가보다 작을 수 없습니다.</font>';

    else if (
        document.querySelector('#op_warn').innerHTML='');

    else if ($('#sprice').val() == '' || $('#sprice').val() == '금액입력')
        document.querySelector('#sp_warn').innerHTML=
            '<font color = #dc143c>금액은 비울 수 없습니다.</font>';

    else if ($('#oprice').val() <= $('#sprice').val())
        document.querySelector('#sp_warn').innerHTML=
            '<font color = #dc143c>정가는 판매가보다 작을 수 없습니다.</font>';

    else if (
        document.querySelector('#sp_warn').innerHTML='');

    else {
        $('#email').val( $('#email1').val() + '@' + $('#email2').val() );

        const frm = $('#sellfrm');
        frm.attr("method", "post");
        frm.attr('action', "/seller/write");
        frm.attr('enctype', "multipart/form-data");
        frm.submit();

        alert('판매 등록이 완료되었습니다!')
    }
});



//date
$( function() {
    $( "#sdate" ).datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0, maxDate: "+7D" });
    $( "#edate" ).datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: +1, maxDate: "+6M"});
} );


// change file name
$('#img1').on('change', function() {
    var fname = $(this).val();
    fname = fname.substring(fname.lastIndexOf("\\") + 1);
    $(this).next('.custom-file-label').html(fname);
});
$('#img2').on('change', function() {
    var fname = $(this).val();
    fname = fname.substring(fname.lastIndexOf("\\") + 1);
    $(this).next('.custom-file-label').html(fname);
});
