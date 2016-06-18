angular.module('medical.services', [])

.factory('medicineService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var medicine = [{
    id: 0,
    name: 'Abacavir Sulfate',
    description: 'It helps to cure cancer Struggling with chronic obstructive pulmonary disorder (COPD) may raise the risk of depression among patients with the incurable respiratory illness, two new studies suggest. One report, from scientists at Manchester Metropolitan University in England, found one in four patients with COPD suffered persistent depressive symptoms over the three years',
    image: 'img/img1.jpeg'
  }, {
    id: 1,
    name: 'Aczone Gel',
    description: 'Need for freshness Improved care could prevent one in every five deaths currently lost to traumatic injuries in the United States, a new federal report finds. Injuries from car crashes, gun violence, falls and other incidents remain the leading cause of death among Americans younger than 46, a committee from the National Academies of Sciences, Engineering and Medicine',
    image: 'img/img2.jpeg'
  }, {
    id: 2,
    name: 'Acyclovir',
    description: 'You should buy a Quick The Zika virus is spreading fast through Puerto Rico, placing hundreds of pregnant women at risk for delivering babies with the devastating birth defect known as microcephaly, the U.S. Centers for Disease Control and Prevention said Friday. Testing of blood donations in Puerto Rico -- "our most accurate real-time leading indicator of Zika activity',
    image: 'img/img3.jpeg'
  }, {
    id: 3,
    name: 'Acylic',
    description: 'Limited offer! Scientists say they\'ve identified a potential way to prevent Zika and similar viruses from spreading in the body. They pinpointed a gene pathway that is vital for Zika and related viruses to spread infection between cells. The researchers found that shutting down a single gene in this pathway prevents these viruses from leaving an infected cell.',
    image: 'img/img4.jpeg'
  }, {
    id: 4,
    name: 'Paracetamol',
    description: 'This is wicked good for fever. To help ease sleep deprivation among teens, the American Medical Association recommends that middle and high school classes should not start until 8:30 a.m. The new policy, adopted at the annual meeting of the American Medical Association (AMA) in Chicago this week, also states that doctors need to educate parents, teachers, school officials and others',
    image: 'img/img5.jpeg'
  }];

  return {
    all: function() {
      return medicine;
    },
    remove: function(chat) {
      medicine.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < medicine.length; i++) {
        if (medicine[i].id === parseInt(chatId)) {
          return medicine[i];
        }
      }
      return null;
    }
  };
});
