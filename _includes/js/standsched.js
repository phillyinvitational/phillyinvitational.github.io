$(document).ready( function () {
    $('table.display').DataTable({
    	paging: false,
    	searching: false,
    	info: false,
        order: [[ 3, "dsc" ], [5, "dsc"]],
    	aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            },
            {
                bSortable: false,
                aTargets: [0, 1, 2]
            }
        ]
    });
    } );

$(document).ready( function () {
    $('table.display2').DataTable({
        paging: false,
        searching: false,
        info: false,
        order: [[ 1, "asc" ]],
        columnDefs: [ { orderable: false, targets: [0, 2, 3, 4] }]
    });
    } );
$(document).ready( function () {
    $('table.display3').DataTable({
        paging: false,
        searching: false,
        info: false,
        order: [[ 2, "asc" ]],
        columnDefs: [ { orderable: false, targets: [0, 3, 4, 5] }]
    });
    } );