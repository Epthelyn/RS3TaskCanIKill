const cik = function(){
    let monsterData = [];
    let slayerTask = true;
    let monsterList = [];
    


    $.ajax({
        url: 'cik.json',
        dataType: 'JSON',
        success: (data) => {
            monsterData = data;
            
            monsterData.forEach(monster => {
                monsterList.push(monster.name);
                if(monster.alias){
                    monster.alias.forEach(alias => {
                        monsterList.push(alias);
                    });
                }
            });

            console.log(monsterList);

            $('#monster_input').autocomplete({
                source: monsterList
            });
        }
    });
    $('#monster_input').on('change', function(){


        updateDisplay();
    });

    $('#slayertask').on('click', updateDisplay);
    
    parseFraction = (frac) => {
        const nums = frac.split("/");
        if(nums.length != 2) return 0;

        return parseInt(nums[0])/parseInt(nums[1]);
    };

    sumRates = (drops) => {
        let sum = 0;
        let someEstimates = false;
        drops.forEach(drop => {
            if(drop.collected) return 0;
            const rateToUse = $('#slayertask').is(':checked')?(drop.taskRate || drop.rate):drop.rate;
            const asDecimal = parseFraction(rateToUse);
            sum += asDecimal;
            if(drop.estimate) someEstimates = true;
        });

        return {
            value: sum,
            denom: ~~Math.pow(sum,-1),
            someEstimates: someEstimates
        }
    }

    function updateDisplay(){
        $('.outputItemContainer').html("");
        const val = $('#monster_input').val();

        const data = monsterData.filter(monster => monster.name == val || (monster.alias && monster.alias.includes(val)));
        // console.log(data);
        if(data.length){
            let rates = sumRates(data[0].drops);

            if(rates.denom != 0 && rates.denom < 2000){
                $('.outputSummary').removeClass('yes');
                $('.outputSummary').addClass('no');
                $('.outputSummary').removeClass('maybe');
                $('.outputSummary').html(`No (1/${rates.denom})`);
            }
            else{
                $('.outputSummary').addClass('yes');
                $('.outputSummary').removeClass('no');
                $('.outputSummary').removeClass('maybe');
                if(rates.denom == 0){
                    $('.outputSummary').html(`Yes`);
                }
                else{
                    $('.outputSummary').html(`Yes (1/${rates.denom})`);
                }
                
            }

            let dropsHTML = data[0].drops.map((drop,index) => {
                return `<div class="outputItemRow ${drop.collected?`collected`:``}" mIdx="${monsterData.indexOf(data[0])}" dIdx="${index}">${drop.item} - ${$('#slayertask').is(':checked')?(drop.taskRate || drop.rate):drop.rate}</div>`;
            }).join("");
            // console.log(dropsHTML);

            let h =`<div class="outputItemRow"><u>Click a drop to mark it as collected</u></div>`;
            h += dropsHTML;
            if(data[0].note){
                h += `<div class="outputItemRow"><br><i>${data[0].note}</i></div>`
            }
            if(rates.someEstimates){
                h += `<div class="outputItemRow"><i style="color: yellow;">Some item drop rates are estimates based on either the Runemetrics drop log project or Uncommon/Rare/Very Rare wiki information</i></div>`
            }
            $('.outputItemContainer').html(h);

            $('.outputItemRow').on('click', function(){
                if(!$(this).attr('mIdx')){
                    return;
                }

                const mIdx = $(this).attr('mIdx');
                const dIdx = $(this).attr('dIdx');
                monsterData[mIdx].drops[dIdx].collected = !monsterData[mIdx].drops[dIdx].collected;
                updateDisplay();
            });
        }
        else{
            $('.outputSummary').removeClass('yes');
            $('.outputSummary').removeClass('no');
            $('.outputSummary').addClass('maybe');
            $('.outputSummary').html(`Maybe (no input)`);
        }
    }
}();