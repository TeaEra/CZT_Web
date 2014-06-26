/**
 * Created by TeaEra on 2014/6/26.
 */

var templateIntro = _.template('\
<!-- -->\
<h3 class="page-header">Programming languages</h3>\
<div class="table-responsive left-padding">\
    <table class="table table-striped">\
        <thead></thead>\
        <tbody>\
            <tr>\
                <td class="fa-4x"><i class="icon-cplusplus"></i></td>\
                <td>\
                    <%= arguments[0]["programming-language"]["cplusplus"]["proficiency"] %>\
                </td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-c"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-csharp"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-python"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-java"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-javascript"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-php"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-html"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-css"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
        </tbody>\
    </table>\
</div>\
<!-- -->\
<h3 class="page-header">Operating Systems</h3>\
<div class="table-responsive left-padding">\
    <table class="table table-striped">\
        <thead></thead>\
        <tbody>\
            <tr>\
                <td class="fa-4x"><i class="icon-fedora"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-ubuntu"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
            <tr>\
                <td class="fa-4x"><i class="icon-osx"></i></td>\
                <td></td>\
                <td>\
                    some description\
                </td>\
            </tr>\
        </tbody>\
    </table>\
    </div>\
');

var templateFooter = _.template('\
\<div class="container">\
    <div class="col-md-4">\
    <div class="fa-2x dotted-border-bottom">\
        <span class="glyphicon glyphicon-user"></span>\
    &nbsp;About\
    </div>\
    <div>\
    <span class="glyphicon glyphicon-hand-right"></span>\
    &nbsp;<b class="big-name">CHEN Zhengtong</b>\
</div>\
<div>\
    <span class="glyphicon glyphicon-hand-right"></span>\
&nbsp;<b class="big-name">Vince CHEN</b>\
</div>\
<br />\
<div>\
    <p>Just hope life could be simple.</p>\
</div>\
</div>\
<div class="col-md-4">\
    <div class="fa-2x dotted-border-bottom">\
        <span class="glyphicon glyphicon-envelope"></span>\
    &nbsp;Email\
    </div>\
    <div>\
        <i class="fa fa-google icon-min-size"></i>\
        <a>cllf08214@gmail.com</a>\
    </div>\
    <div>\
        <i class="fa fa-qq"></i>\
        <a>cllf08214@qq.com</a>\
    </div>\
</div>\
<div class="col-md-4">\
    <div class="fa-2x dotted-border-bottom">\
        <i class="fa fa-desktop"></i>\
    &nbsp;Just do IT\
    </div>\
    <div>\
    <i class="fa fa-github"></i>\
    <a>https://github.com/TeaEra</a>\
</div>\
    <div>\
        <i class="fa fa-weibo"></i>\
        <a>http://weibo.com/teaera</a>\
    </div>\
</div>\
</div>\
');

var templateTimeline = _.template('\
        \<div class="page-header">\
            <h1 id="timeline">Timeline</h1>\
        </div>\
        <ul class="timeline">\
    <li>\
        <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>\
        <div class="timeline-panel">\
            <div class="timeline-heading">\
                <h4 class="timeline-title">Mussum ipsum cacilds</h4>\
                <p>\
                    <small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter\
                    </small>\
                </p>\
            </div>\
            <div class="timeline-body">\
                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis\
                porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros\
                vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.\
                Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce\
                receita de bolis, mais bolis eu num gostis.</p>\
            </div>\
        </div>\
    </li>\
    <li class="timeline-inverted">\
    <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>\
    <div class="timeline-panel">\
    <div class="timeline-heading">\
        <h4 class="timeline-title">Mussum ipsum cacilds</h4>\
    </div>\
    <div class="timeline-body">\
    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis\
    porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros\
    vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.\
    Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce\
    receita de bolis, mais bolis eu num gostis.</p>\
    <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé,\
    cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a,\
    posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper.\
    Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque\
laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet,\
    consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo\
massa.</p>\
</div>\
</div>\
</li>\
<li>\
    <div class="timeline-badge danger"><i class="glyphicon glyphicon-credit-card"></i></div>\
    <div class="timeline-panel">\
        <div class="timeline-heading">\
            <h4 class="timeline-title">Mussum ipsum cacilds</h4>\
        </div>\
        <div class="timeline-body">\
            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis\
            porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros\
            vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.\
            Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce\
            receita de bolis, mais bolis eu num gostis.</p>\
        </div>\
    </div>\
</li>\
<li class="timeline-inverted">\
    <div class="timeline-panel">\
        <div class="timeline-heading">\
            <h4 class="timeline-title">Mussum ipsum cacilds</h4>\
        </div>\
        <div class="timeline-body">\
            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis\
            porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros\
            vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.\
            Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce\
            receita de bolis, mais bolis eu num gostis.</p>\
        </div>\
    </div>\
    </li>\
<li>\
    <div class="timeline-badge info"><i class="glyphicon glyphicon-floppy-disk"></i></div>\
    <div class="timeline-panel">\
        <div class="timeline-heading">\
            <h4 class="timeline-title">Mussum ipsum cacilds</h4>\
        </div>\
        <div class="timeline-body">\
            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis\
            porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros\
            vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.\
            Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce\
            receita de bolis, mais bolis eu num gostis.</p>\
            <hr>\
                <div class="btn-group">\
                    <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">\
                        <i class="glyphicon glyphicon-cog"></i> <span class="caret"></span>\
                    </button>\
                    <ul class="dropdown-menu" role="menu">\
                        <li><a href="#">Action</a></li>\
                        <li><a href="#">Another action</a></li>\
                        <li><a href="#">Something else here</a></li>\
                        <li class="divider"></li>\
                        <li><a href="#">Separated link</a></li>\
                    </ul>\
                </div>\
            </div>\
        </div>\
    </li>\
    <li>\
        <div class="timeline-panel">\
            <div class="timeline-heading">\
                <h4 class="timeline-title">Mussum ipsum cacilds</h4>\
            </div>\
            <div class="timeline-body">\
                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis\
                porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros\
                vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.\
                Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce\
                receita de bolis, mais bolis eu num gostis.</p>\
            </div>\
        </div>\
    </li>\
    <li class="timeline-inverted">\
        <div class="timeline-badge success"><i class="glyphicon glyphicon-thumbs-up"></i></div>\
        <div class="timeline-panel">\
            <div class="timeline-heading">\
                <h4 class="timeline-title">Mussum ipsum cacilds</h4>\
            </div>\
            <div class="timeline-body">\
                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis\
                porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros\
                vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.\
                Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce\
                receita de bolis, mais bolis eu num gostis.</p>\
            </div>\
        </div>\
    </li>\
</ul>\
');