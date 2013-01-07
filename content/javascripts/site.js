$(function(){
    var data = [
        [
            {from: '08:00', to: '10:00', title: 'Some talk'},
            {from: '10:00', to: '12:00', title: 'Some talk'},
            {from: '12:00', to: '14:00', title: 'Some talk'}
        ],
        [
            {from: '10:00', to: '12:00', title: 'Some talk'},
            {from: '14:00', to: '16:00', title: 'Some talk'},
            {from: '16:00', to: '18:00', title: 'Some talk'}
        ],
        [
            {from: '12:00', to: '14:00', title: 'Some talk'},
            {from: '14:00', to: '16:00', title: 'Some talk'},
            {from: '16:00', to: '18:00', title: 'Some talk'}
        ]
    ];

    var a = new Agenda('#agenda_area', {
        days: ['Friday', 'Saturday', 'Sunday'],
        from: '08:00',
        to: '18:00'
    });

    for (var i=data.length-1; i>= 0; i--) {
        for (var j=data[i].length-1; j >= 0; j--) {
            a.add(i, data[i][j]);
        }
    }
});