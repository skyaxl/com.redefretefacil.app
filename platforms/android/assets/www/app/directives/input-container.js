/**
 * Created by Andrey on 23/05/2015.
 */

app.directive('inputContainer',function(){
        function link(scope, element, attrs) {
            console.log(element[0].childNodes);





                var ngElement = angular.element(element[0]);
            var formParent = ngElement.parent()[0];

            while(formParent.tagName != 'FORM')
            {
                formParent = angular.element(formParent).parent()[0];
            }

            angular.element(formParent).on('submit',function(){
                var invalid = ngElement.find('input.ng-invalid').length > 0;
                if(invalid)
                {
                    ngElement.addClass('ng-invalid');
                    return;
                }
                ngElement.removeClass('ng-invalid');
            })









        }

        return {
            link: link
        };

    });