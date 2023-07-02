import classes from './Story.module.css';
import dishes from '../../asserts/dihes.png';

const Story = () => {
     return (
          <div className={classes.story}>
               <div className='container'>
                    <div className={classes.storyInner}>
                         <div className={classes.storyImageBlock}>
                              <img src={dishes} alt='#'  className={classes.storyImage}/>
                         </div>
                         <div className={classes.storyTextBlock}>
                              <div className={classes.storyLeftBlock}>
                                   <h3 className={classes.storyTitle}>Наша <span className={classes.storyOrange}>История</span></h3>
                                   <p className={classes.storyDesc}>Как и у любого другого самобытного места, у нас есть своя, особая история.
                                        Идея ресторана пришла основателям
                                        неожиданно. Во время прогулки по лесу создатель нашего
                                        ресторана застрял в сотнях километров от ближайшего населенного пункта.
                                        Вдали от цивилизации и связи им пришлось навремя обустровать
                                        себе нехитрый быт, добывать и готовить себе еду.</p>
                              </div>
                              <div className={classes.storyTextDishes}>
                                   <div className={classes.storyText}>
                                        <span className={classes.storyNumber}>93<br /></span>
                                        <span className={classes.storyDishes}>Напитки</span>
                                   </div>
                                   <div className={classes.storyText}>
                                        <span  className={classes.storyNumber}>206<br /></span>
                                        <span className={classes.storyDishes}>Еда</span>
                                   </div>
                                   <div className={classes.storyText}>
                                        <span  className={classes.storyNumber}>71<br /></span>
                                        <span className={classes.storyDishes}>Закуски</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
export default Story;