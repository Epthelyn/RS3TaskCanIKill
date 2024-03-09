const _war = function(){
    return false;
    let wildyElite = false;
    let revEnhancer = true;

    let revs = [
        {
            name: "imp",
            cb: 14
        },
        {
            name: "goblin",
            cb: 16
        },
        {
            name: "goblin",
            cb: 19
        },
        {
            name: "goblin",
            cb: 22
        },
        {
            name: "goblin",
            cb: 28
        },
        {
            name: "icefiend",
            cb: 37
        },
        {
            name: "pyrefiend",
            cb: 40
        },
        {
            name: "hobgoblin",
            cb: 44
        },
        {
            name: "vampyre",
            cb: 47
        },
        {
            name: "werewolf",
            cb: 53
        },
        {
            name: "cyclops",
            cb: 60
        },
        {
            name: "hellhound",
            cb: 70
        },
        {
            name: "demon",
            cb: 84
        },
        {
            name: "ork",
            cb: 98
        },
        {
            name: "dark beast",
            cb: 112
        },
        {
            name: "knight",
            cb: 119
        },
        {
            name: "dragon",
            cb: 126
        }
    ];

    let items = [
        {name: "Bandos statuette", inLog: false, collected: false},
        {name: "Saradomin statuette", inLog: false, collected: false},
        {name: "Zamorak statuette", inLog: false, collected: false},
        {name: "Armadyl statuette", inLog: false, collected: false},
        {name: "Seren statuette", inLog: false, collected: false},
        {name: "Ancient statuette", inLog: false, collected: false},
        {name: "Brawling gloves (Agility)", inLog: false, collected: false},
        {name: "Brawling gloves (Cooking)", inLog: false, collected: false},
        {name: "Brawling gloves (Fishing)", inLog: false, collected: false},
        {name: "Brawling gloves (FM)", inLog: false, collected: false},
        {name: "Brawling gloves (Hunter)", inLog: false, collected: false},
        {name: "Brawling gloves (Magic)", inLog: false, collected: false},
        {name: "Brawling gloves (Melee)", inLog: false, collected: false},
        {name: "Brawling gloves (Mining)", inLog: false, collected: false},
        {name: "Brawling gloves (Prayer)", inLog: false, collected: false},
        {name: "Brawling gloves (Ranged)", inLog: false, collected: false},
        {name: "Brawling gloves (Smithing)", inLog: false, collected: false},
        {name: "Brawling gloves (Thieving)", inLog: false, collected: false},
        {name: "Brawling gloves (WC)", inLog: false, collected: false},
        {name: "Ruby chalice", inLog: false, collected: false},
        {name: "Guthixian brazier", inLog: false, collected: false},
        {name: "Armadyl totem", inLog: false, collected: false},
        {name: "Zamorak medallion", inLog: false, collected: false},
        {name: "Saradomin carving", inLog: false, collected: false},
        {name: "Bandos scrimshaw", inLog: false, collected: false},
        {name: "Corrupt dragon battleaxe", inLog: true, collected: false},
        {name: "Corrupt dragon dagger", inLog: true, collected: false},
        {name: "Corrupt dragon longsword", inLog: true, collected: false},
        {name: "Corrupt dragon mace", inLog: true, collected: false},
        {name: "Corrupt dragon scimitar", inLog: true, collected: false},
        {name: "Corrupt dragon spear", inLog: true, collected: false},
        {name: "Corrupt dragon chainbody", inLog: true, collected: false},
        {name: "Corrupt dragon helm", inLog: true, collected: false},
        {name: "Corrupt dragon platelegs", inLog: true, collected: false},
        {name: "Corrupt dragon plateskirt", inLog: true, collected: false},
        {name: "Corrupt dragon sq shield", inLog: true, collected: false},
        {name: "Saradomin amphora", inLog: false, collected: false},
        {name: "Ancient psaltery bridge", inLog: false, collected: false},
        {name: "Bronzed dragon claw", inLog: false, collected: false},
        {name: "Third age carafe", inLog: false, collected: false},
        {name: "Broken statue headdress", inLog: false, collected: false},
        {name: "Morrigan's javelin", inLog: true, collected: false},
        {name: "Morrigan's throwing axe", inLog: true, collected: false},
        {name: "Statius's warhammer", inLog: true, collected: false},
        {name: "Vesta's longsword", inLog: true, collected: false},
        {name: "Vesta's spear", inLog: true, collected: false},
        {name: "Zuriel's staff", inLog: true, collected: false},
        {name: "Morrigan's coif", inLog: true, collected: false},
        {name: "Morrigan's leather body", inLog: true, collected: false},
        {name: "Morrigan's leather chaps", inLog: true, collected: false},
        {name: "Statius's full helm", inLog: true, collected: false},
        {name: "Statius's platebody", inLog: true, collected: false},
        {name: "Statius's platelegs", inLog: true, collected: false},
        {name: "Vesta's chainbody", inLog: true, collected: false},
        {name: "Vesta's platelegs", inLog: true, collected: false},
        {name: "Zuriel's hood", inLog: true, collected: false},
        {name: "Zuriel's robe top", inLog: true, collected: false},
        {name: "Zuriel's robe bottom", inLog: true, collected: false},
        {name: "Corrupt Morrigan's javelin", inLog: true, collected: false},
        {name: "Corrupt Morrigan's throwing axe", inLog: true, collected: false},
        {name: "Corrupt Statius's warhammer", inLog: true, collected: false},
        {name: "Corrupt Vesta's longsword", inLog: true, collected: false},
        {name: "Corrupt Vesta's spear", inLog: true, collected: false},
        {name: "Corrupt Zuriel's staff", inLog: true, collected: false},
        {name: "Corrupt Morrigan's coif", inLog: true, collected: false},
        {name: "Corrupt Morrigan's leather body", inLog: true, collected: false},
        {name: "Corrupt Morrigan's leather chaps", inLog: true, collected: false},
        {name: "Corrupt Statius's full helm", inLog: true, collected: false},
        {name: "Corrupt Statius's platebody", inLog: true, collected: false},
        {name: "Corrupt Statius's platelegs", inLog: true, collected: false},
        {name: "Corrupt Vesta's chainbody", inLog: true, collected: false},
        {name: "Corrupt Vesta's platelegs", inLog: true, collected: false},
        {name: "Corrupt Zuriel's hood", inLog: true, collected: false},
        {name: "Corrupt Zuriel's robe top", inLog: true, collected: false},
        {name: "Corrupt Zuriel's robe bottom", inLog: true, collected: false},
    ];

    items = items.sort((a,b) => b.inLog - a.inLog);

    $('#wildyelite').on('change', function(){
        calcRevs();
    });

    $('#revenh').on('change', function(){
        calcRevs();
    });
    
    $('#totaldr').on('change', function(){
        calcRevs();
    });

    $('#revselect').on('change', function(){
        calcRevs();
    });
    const calcRevs = () => {
        revs.forEach(rev => {
            const G = Math.sqrt(rev.cb);

            const RMult = ($('#wildyelite').is(':checked')?0.95:1)*($('#revenh').is(':checked')?0.9:1);
            const R = RMult*60000/G;
            rev.G = G;
            rev.R = R;
            rev.dropChance = {
                "Bandos statuette": 1/R,
                "Saradomin statuette": 1/R,
                "Zamorak statuette": 1/R,
                "Armadyl statuette": 1/R,
                "Seren statuette": 1/R,
                "Ancient statuette": 1/R,
                "Brawling gloves (Agility)": 1/(15*R),
                "Brawling gloves (Cooking)": 1/(15*R),
                "Brawling gloves (Fishing)": 1/(15*R),
                "Brawling gloves (FM)": 1/(15*R),
                "Brawling gloves (Hunter)": 2/(15*R),
                "Brawling gloves (Magic)": 1/(15*R),
                "Brawling gloves (Melee)": 1/(15*R),
                "Brawling gloves (Mining)": 1/(15*R),
                "Brawling gloves (Prayer)": 1/(15*R),
                "Brawling gloves (Ranged)": 1/(15*R),
                "Brawling gloves (Smithing)": 2/(15*R),
                "Brawling gloves (Thieving)": 1/(15*R),
                "Brawling gloves (WC)": 1/(15*R),
                "Ruby chalice": 2/R,
                "Guthixian brazier": 2/R,
                "Armadyl totem": 2/R,
                "Zamorak medallion": 2/R,
                "Saradomin carving": 2/R,
                "Bandos scrimshaw": 2/R,
                "Corrupt dragon battleaxe": 2/(11*R),
                "Corrupt dragon dagger": 2/(11*R),
                "Corrupt dragon longsword": 2/(11*R),
                "Corrupt dragon mace": 2/(11*R),
                "Corrupt dragon scimitar": 2/(11*R),
                "Corrupt dragon spear": 2/(11*R),
                "Corrupt dragon chainbody": 2/(11*R),
                "Corrupt dragon helm": 2/(11*R),
                "Corrupt dragon platelegs": 2/(11*R),
                "Corrupt dragon plateskirt": 2/(11*R),
                "Corrupt dragon sq shield": 2/(11*R),
                "Saradomin amphora": 3/R,
                "Ancient psaltery bridge": 3/R,
                "Bronzed dragon claw": 3/R,
                "Third age carafe": 3/R,
                "Broken statue headdress": 3/R,
                "Morrigan's javelin": 10/(17*R),
                "Morrigan's throwing axe": 10/(17*R),
                "Statius's warhammer": 10/(17*R),
                "Vesta's longsword": 10/(17*R),
                "Vesta's spear": 10/(17*R),
                "Zuriel's staff": 10/(17*R),
                "Morrigan's coif": 10/(17*R),
                "Morrigan's leather body": 10/(17*R),
                "Morrigan's leather chaps": 10/(17*R),
                "Statius's full helm": 10/(17*R),
                "Statius's platebody": 10/(17*R),
                "Statius's platelegs": 10/(17*R),
                "Vesta's chainbody": 10/(17*R),
                "Vesta's platelegs": 10/(17*R),
                "Zuriel's hood": 10/(17*R),
                "Zuriel's robe top": 10/(17*R),
                "Zuriel's robe bottom": 10/(17*R),
                "Corrupt Morrigan's javelin": 10/(17*R),
                "Corrupt Morrigan's throwing axe": 10/(17*R),
                "Corrupt Statius's warhammer": 10/(17*R),
                "Corrupt Vesta's longsword": 10/(17*R),
                "Corrupt Vesta's spear": 10/(17*R),
                "Corrupt Zuriel's staff": 10/(17*R),
                "Corrupt Morrigan's coif": 10/(17*R),
                "Corrupt Morrigan's leather body": 10/(17*R),
                "Corrupt Morrigan's leather chaps": 10/(17*R),
                "Corrupt Statius's full helm": 10/(17*R),
                "Corrupt Statius's platebody": 10/(17*R),
                "Corrupt Statius's platelegs": 10/(17*R),
                "Corrupt Vesta's chainbody": 10/(17*R),
                "Corrupt Vesta's platelegs": 10/(17*R),
                "Corrupt Zuriel's hood": 10/(17*R),
                "Corrupt Zuriel's robe top": 10/(17*R),
                "Corrupt Zuriel's robe bottom": 10/(17*R)
            };
            rev.coins = 50*G;

            let totalChance = {
                all: 0,
                inLog: 0,
                all_simple: 0,
                inLog_simple: 0
            }
            for(k in rev.dropChance){
                const arrItem = items.filter(item => item.name == k)[0];
                if(!arrItem.collected){
                    totalChance.all += rev.dropChance[k];
                    totalChance.all_simple = Math.max(totalChance.all_simple, rev.dropChance[k]);
                    if(arrItem.inLog){
                        totalChance.inLog += rev.dropChance[k];
                        totalChance.inLog_simple = Math.max(totalChance.inLog_simple, rev.dropChance[k]);
                    }
                }
            }

            rev.totalChance = totalChance;

            if($('#totaldr').is(':checked')){
                console.log(`${rev.name} -- Any Item: 1/${~~(totalChance.all**-1)}, In Log: 1/${~~(totalChance.inLog**-1)}`);
            }
            else{
                console.log(`${rev.name} -- Any Item: 1/${~~(totalChance.all_simple**-1)}, In Log: 1/${~~(totalChance.inLog_simple**-1)}`);
            }
            
            
        });
        
        console.log(revs);

        let revToDisplay = revs[$('#revselect').val()];
        console.log(revToDisplay);
        const chance = $('#totaldr').is(':checked')?revToDisplay.totalChance.inLog:revToDisplay.totalChance.inLog_simple;
        $('.outputSummary').html(`${chance<0.0005?`Yes`:`No`} (1/${~~(chance**-1)})`);

        if(chance != 0 && chance>0.0005){
            $('.outputSummary').removeClass('yes');
            $('.outputSummary').addClass('no');
            $('.outputSummary').removeClass('maybe');
            $('.outputSummary').html(`No (1/${~~(chance**-1)})`);
        }
        else{
            $('.outputSummary').addClass('yes');
            $('.outputSummary').removeClass('no');
            $('.outputSummary').removeClass('maybe');
            if(chance == 0){
                $('.outputSummary').html(`Yes`);
            }
            else{
                $('.outputSummary').html(`Yes (1/${~~(chance**-1)})`);
            }
            
        }
        updateList();
    }

    const updateList = () => {
        let listHTML = "";
        listHTML += `<div class="outputItemRow">Items in green are in the log. Only log items count.</div>`;
        items.forEach((item,index) => {
            listHTML += `<div class="outputItemRow halfrow ${item.collected?`collected`:``} ${item.inLog?`inLog`:``}" itemIdx="${index}">${item.name}</div>`;
        });
        $('.outputItemContainer').html(listHTML);


        $('.outputItemRow').on('click', function(){
            if(!$(this).attr('itemIdx')){
                return;
            }

            const itemIdx = $(this).attr('itemIdx');
            items[itemIdx].collected = !items[itemIdx].collected;

            calcRevs();
        });
    }
    calcRevs();
}();
