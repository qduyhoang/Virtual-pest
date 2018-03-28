# Virtual-pest
<div class="ui container"> 
      <h4>If you keep your pet alive for a certain amount of days, it will grow. There are 4 levels that your pet can grow into.</h4>
                                           
      <h2>Finite state machine table</h2>
|-------------------------|------------------------|---------------------------------------------------------|
|     Current Status      |       Action           |                      Status                             |
|-------------------------|------------------------|---------------------------------------------------------|
|Happy                    |Water                   |1% health increase                                       |  
|                         |                        |First two levels:                                        |
|                         |                        |  - Reduce 60% health when pet's health is already full  |
|                         |                        |  - Reduce 100% health when overwatered 2 times          |
||------------------------|------------------------|---------------------------------------------------------|
|                         |Expose to the sun       |Photosynthesis (10% health increase)                     |
|                         |                        |                                                         |
|                         |Throw Bugs              |Under Disease (Health decreasing constantly until cured) |
|                         |                        |                                                         |
|                         |Strike with Lightning   |Got struck by lightning(30% health decrease)             |
|                         |                        |                                                         |
|Thirsty                  |Water                   | 2% health increase                                      |
|                         |                        |                                                         |
|                         |Expose to the sun       |Withered (10% health decrease)                           |
|                         |                        |                                                         |
|                         |Throw bugs              | Consuming bugs (10% health increase)                    |
|                         |                        |                                                         |
|                         |Strike with lightning   |Run Away (100% health decrease)                          |
|-------------------------|------------------------|---------------------------------------------------------|   
|Under disease            |Cure                    |Remove under disease status(stop decreasing health)      |
|                         |                        |                                                         |
|                         |Water                   |5% health increase                                       |
|                         |                        |                                                         |
|                         |Expose to the sun       |Disease gets worse (Double speed of health decreasing)   |
|                         |                        |                                                         |
|                         |Strike with lightning   |Got struck by lightning(-30% health)                     |
|                         |                        |                                                         |
|                         |                        |Bugs die (Remove under disease status)                   |
|-------------------------|------------------------|---------------------------------------------------------|
|Got struck by Lightning  |Expose to the sun       |Can not perform Photosynthesis                           |
|                         |                        |                                                         |
|                         |Strike with Lightning   |Run Away (100% health decrease)                          |
|-------------------------|------------------------|---------------------------------------------------------|
|Photosynthesis           |Throw Bugs              |Under Disease (Health decreasing constantly until cured) |
|                         |                        |                                                         |
|                         |Expose to the sun       |Already in Photosynthesis                                |
|                         |                        |                                                         |
|                         |Strike with lightning   |Is not affected                                          |
|-------------------------|------------------------|---------------------------------------------------------|  
  

**Randomness ( when pet > 30 days) :
    *Random Disease : 30% chance every 8 seconds
    *Random Lightning: 30% chance every 11 seconds
