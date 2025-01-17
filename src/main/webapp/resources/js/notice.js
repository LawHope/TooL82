// search board
$('#findbtn').on('click', function() {
    if ($('#findkey').val() == '') alert('검색할 내용을 입력하세요!');
    else {
        let qry = "?findtype=" + $('#findtype').val();
        qry += "&findkey=" + $('#findkey').val() + "&cp=1";

        let url = '/notice/find' + qry
        location.href = url;
    }
});

// findtype tag setting
$('#findtype').val('${param.findtype}').prop('selected', 'true');

// 이전글
$('#nprvbtn').on('click', function() {
    location.href = '/notice/prev?bno=' + $('#bno').val();
});

// 다음글
$('#nnxtbtn').on('click', function() {
    location.href = '/notice/next?bno=' + $('#bno').val();
});