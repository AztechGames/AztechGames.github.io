
<div class='container'>
<div class='outer-wrapper'>
<div class='main-wrapper' id='education'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType!= &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<div class='section-heading1 text-center'>
<h2>Lates News</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
</div>
</b:if>
</b:if>
</b:if>
                    <b:section class='main' id='main' showaddelement='no'>
                      <b:widget id='Blog1' locked='true' title='Blog Kayıtları' type='Blog' version='1'>
                        <b:widget-settings>
                          <b:widget-setting name='showDateHeader'>true</b:widget-setting>
                          <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='showShareButtons'>false</b:widget-setting>
                          <b:widget-setting name='authorLabel'>By</b:widget-setting>
                          <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                          <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='showAuthor'>true</b:widget-setting>
                          <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                          <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='reactionsLabel'/>
                          <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                          <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                          <b:widget-setting name='showLabels'>true</b:widget-setting>
                          <b:widget-setting name='showLocation'>false</b:widget-setting>
                          <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                          <b:widget-setting name='postsPerAd'>1</b:widget-setting>
                          <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                          <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                          <b:widget-setting name='showInlineAds'>false</b:widget-setting>
                          <b:widget-setting name='showReactions'>false</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main' var='top'>
  <b:if cond='data:mobileindex'>
    <!-- mobile index -->
    <div class='blog-posts hfeed'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
          &lt;/div&gt;
        </b:if>
        &lt;div class=&quot;mobile-date-outer date-outer&quot;&gt;
        <div expr:onclick='data:post.indexOnclick'>
          <b:include data='post' name='mobile-index-post'/>
        </div>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;
      </b:if>
    </div>
  <b:else/>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <data:defaultAdStart/>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart'>
          <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
            &lt;/div&gt;&lt;/div&gt;
          </b:if>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>

        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
        <b:include data='post' name='post'/>
        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
        </div>
        <b:if cond='data:post.includeAd'>
          <b:if cond='data:post.isFirstPost'>
            <data:defaultAdEnd/>
          <b:else/>
            <data:adEnd/>
          </b:if>
          <b:if cond='data:mobile == &quot;false&quot;'>
            <div class='inline-ad'>
              <data:adCode/>
            </div>
          </b:if>
          <data:adStart/>
        </b:if>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
      <data:adEnd/>
    </div>
  </b:if>

  <!-- navigation -->
  <b:if cond='data:mobile'>
    <b:include name='mobile-nextprev'/>
  <b:else/>
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>
  </b:if>

  <b:if cond='data:top.showStars'>
    <script src='//www.google.com/jsapi' type='text/javascript'/>
    <script type='text/javascript'>
      google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
      function initialize() {
        google.annotations.setApplicationId(<data:top.blogspotReviews/>);
        google.annotations.createAll();
        google.annotations.fetch();
      }
      google.setOnLoadCallback(initialize);
    </script>
  </b:if>
  </b:includable>
                        <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='//www.blogger.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
                        <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
                        <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                        <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='http://2.bp.blogspot.com/-d-5BS0YCkho/UOKe2UIw0rI/AAAAAAAAC4w/md_iYNVHaHk/s1600/delete4.png'/>
      </a>
    </b:if>
  </span>
</b:includable>
                        <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.forceIframeComments'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
    </span>
  <b:else/>
    <b:if cond='data:post.commentSource == 1'>
      <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
      </span>
    <b:else/>
      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
        <data:post.commentLabelFull/>:
      </a>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <b:include data='post' name='iframe_comments'/>
  <b:else/>
    <b:if cond='data:post.showThreadedComments'>
      <b:include data='post' name='threaded_comments'/>
    <b:else/>
      <b:include data='post' name='comments'/>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='comments' var='post'>
  <div class='comments' id='comments'>
        <a name='comments'/>
        <b:if cond='data:post.allowComments'>          
          
         <b:if cond='data:post.numComments != 0'>
          <h4>
           <b:if cond='data:post.numComments == 1'>
            1 <data:commentLabel/>:
           <b:else/>
            <data:post.numComments/> <data:commentLabelPlural/>
           </b:if>
          </h4>
         </b:if>
                
         <b:if cond='data:post.commentPagingRequired'>
          <span class='paging-control-container'>
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
           &#160;
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
           &#160;
           <data:post.commentRangeText/>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </span>
         </b:if>
                        
         <div class='clear'/>
         <div id='comment_block'>
          <b:loop values='data:post.comments' var='comment'>
           <div class='comment_wrap' expr:auclass='data:comment.adminClass' expr:id='data:comment.anchorName' level='0'>
                                                                                       
            <a expr:name='data:comment.anchorName'/>
            <b:if cond='data:post.adminClass == data:comment.adminClass'>
             &lt;div class=&#39;comment_inner comment_admin&#39;&gt;
            <b:else/>
             &lt;div class=&#39;comment_inner&#39;&gt;
            </b:if>
             <div class='comment_header'>
              <div class='comment_avatar'>
               <data:comment.authorAvatarImage/>
              </div>
              <div class='comment_name'>
               <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow' target='_blank'><data:comment.author/></a>
               <b:else/>
                <data:comment.author/>
               </b:if> <span class='comment_author_flag'>mod</span>  
              </div>             
              <div class='comment_service'>
               <a expr:href='data:comment.url' rel='nofollow' title='permalink'><span class='comment_date'><data:comment.timestamp/></span></a>              
               <b:include data='comment' name='commentDeleteIcon'/>
              </div>
              <div class='clear'/>
             </div> 
             <div class='comment_body'>
              <b:if cond='data:comment.isDeleted'>
               <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
               <p><data:comment.body/></p>
<a class='comment_reply' expr:href='&quot;#r_&quot;+data:comment.anchorName' expr:id='&quot;r&quot;+data:comment.anchorName' onclick='javascript:Display_Reply_Form(this)'>Reply</a>                                                            <div class='clear'/>
                                                           
              </b:if>
                                                       
             </div>
             
             
              <div class='clear'/>
            &lt;/div&gt;
            <div class='clear'/>
            
            <div class='comment_child'/>
            <a expr:name='&quot;r_&quot;+data:comment.anchorName'/>
            <div class='comment_reply_form' expr:id='&quot;r_f_&quot;+data:comment.anchorName'/>               
           </div>
          </b:loop>               
         </div>     
         <div class='clear'/>
         <b:if cond='data:post.commentPagingRequired'>
          <span class='paging-control-container'>
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
           &#160;
           <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
           &#160;
           <data:post.commentRangeText/>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
           &#160;
           <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </span>
         </b:if>
         <div class='clear'/>
         <div class='comment_form'>          
          
          <b:if cond='data:post.embedCommentForm'>
           <b:if cond='data:post.allowNewComments'>
            <h4 id='comment-post-message'><data:postCommentMsg/></h4>
                                                           
            <b:include data='post' name='threaded-comment-form'/>
           <b:else/>
            <data:post.noNewCommentsText/>
           </b:if>
          <b:else/>
           <b:if cond='data:post.allowComments'>
            <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
           </b:if>
          </b:if>
         </div>
        </b:if>
       </div>
</b:includable>
                        <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

    <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.allowComments'>
          <b:if cond='data:post.feedLinks'>
            <b:include data='post.feedLinks' name='feedLinksBody'/>
          </b:if>
        </b:if>
      </b:loop>
    </div>
  </b:if>
</b:includable>
                        <b:includable id='feedLinksBody' var='links'>
</b:includable>
                        <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowIframeComments'>
    <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
    <div class='cmt_iframe_holder'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='mobile-index-post' var='post'>
  <b:if cond='data:post.dateHeader'>
    <div class='mobile-index-date'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </div>
  </b:if>

  <div class='mobile-post-outer'>
    <div class='mobile-index-title-outer'>
      <h3 class='mobile-index-title entry-title'>
        <a href='javascript:void(0)'><data:post.title/></a>
      </h3>
    </div>

    <div>
      <div class='mobile-index-arrow'>
        <a href='javascript:void(0)'>&amp;rsaquo;</a>
      </div>

      <div class='mobile-post-contents'>
        <b:if cond='data:post.thumbnailUrl'>
          <div class='mobile-index-thumbnail'>
            <div class='Image'>
              <img expr:src='data:post.thumbnailUrl'/>
            </div>
          </div>
        </b:if>

        <div class='post-body'>
          <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
        </div>
      </div>
      <div class='clr'/>
    </div>

    <div class='mobile-index-comment'>
      <b:if cond='data:blog.pageType != &quot;item&quot;'>
        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
          <b:if cond='data:post.allowComments'>
            <b:if cond='data:post.numComments != 0'>
              <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
            </b:if>
          </b:if>
        </b:if>
      </b:if>
    </div>
  </div>
</b:includable>
                        <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
                        <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clr'/>
</b:includable>
                        <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template'>
          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:else/>
                <b:if cond='data:post.url'>
                  <b:if cond='data:blog.url != data:post.url'>
                    <a expr:href='data:post.url'><data:post.title/></a>
                  <b:else/>
                    <data:post.title/>
                  </b:if>
                <b:else/>
                  <data:post.title/>
                </b:if>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
            <data:post.body/>
            <div class='clr'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn'>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <data:post.author/>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn'><data:post.author/></span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'>
                  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                    <b:if cond='data:post.allowComments'>
                      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
                    </b:if>
                  </b:if>
                </b:if>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
                        <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>
    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clr'/>
</b:includable>
                        <b:includable id='post' var='post'>
<article class='post hentry' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
<div itemType='http://schema.org/WebPage' itemprop='mainEntityOfPage' itemscope='itemscope'/>
<span class='post-author vcard' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person' style='display:none'> 
               <b:if cond='data:post.authorProfileUrl'> 
                    <b:if cond='data:post.authorPhoto.url'>
<b:if cond='data:blog.pageType != &quot;static_page&quot; and data:blog.pageType != &quot;item&quot;'>
<img alt='author' expr:src='data:post.authorPhoto.url' height='36' title='Author' width='36'/>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot; or data:blog.pageType == &quot;static_page&quot;'>
<img alt='author' expr:src='data:post.authorPhoto.url' height='36' title='Author' width='36'/>
</b:if>
</b:if>
                    <span class='fn author'>
                  <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'> 
                        <span itemprop='name'><data:post.author/></span> 
                      </a> 
                    </span> 
                  <b:else/> 
                    <span class='fn author'><span itemprop='name'><data:post.author/></span></span> 
                  </b:if> 
<meta expr:content='data:post.authorPhoto.url' itemprop='image'/>
                </span>
<meta expr:content='data:post.snippet' property='twitter:description'/>
<b:if cond='data:post.firstImageUrl'>
<div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
  <meta expr:content='data:post.firstImageUrl' itemprop='url'/>
  <meta content='auto' itemprop='width'/>
  <meta content='auto' itemprop='height'/>
  </div>
<b:else/>
<div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
  <meta content='https://2.bp.blogspot.com/-7tO1_-EIzRY/W8gQF1R37SI/AAAAAAAAGoI/TUfDQV2I_MkA6HKoD9rTKX04KjM53HrlACLcBGAs/s1600/c.png' itemprop='url'/>
  <meta content='auto' itemprop='width'/>
  <meta content='auto' itemprop='height'/>
  </div>
    </b:if>
  <div itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'>
    <div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
      <meta content='https://2.bp.blogspot.com/-7tO1_-EIzRY/W8gQF1R37SI/AAAAAAAAGoI/TUfDQV2I_MkA6HKoD9rTKX04KjM53HrlACLcBGAs/s1600/c.png' itemprop='url'/>
      <meta content='auto' itemprop='width'/>
      <meta content='auto' itemprop='height'/>
    </div>
    <meta expr:content='data:blog.title' itemprop='name'/>
 </div>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'> 
  <div class='img-home'>
<b:if cond='data:post.firstImageUrl'>
  <a expr:href='data:post.url'>
<img expr:src='data:post.firstImageUrl' expr:title='data:post.title'/></a>
<b:else>
  <a expr:href='data:post.url'>
<img expr:title='data:post.title' src='https://2.bp.blogspot.com/-7tO1_-EIzRY/W8gQF1R37SI/AAAAAAAAGoI/TUfDQV2I_MkA6HKoD9rTKX04KjM53HrlACLcBGAs/s1600/c.png'/></a>
  </b:else>
</b:if>

<div class='postmeta'>
<div>
<h3>
<span class='post-author vcard' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'> 
               <b:if cond='data:post.authorProfileUrl'> 
                    <span class='fn author'>
                  <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'> 
                        <span itemprop='name'><i class='fa fa-user'/> Admin</span> 
                      </a> 
                    </span> 
                  <b:else/> 
                    <span class='fn author'><span itemprop='name'><data:post.author/></span></span> 
                  </b:if> 
<meta expr:content='data:post.authorPhoto.url' itemprop='image'/>
                </span>
<span itemprop='dateModified'>
<a class='updated' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='updated' expr:title='data:post.timestampISO8601' itemprop='datePublished'><i class='fa fa-calendar'/> <data:post.timestamp/></abbr></a>
</span>
</h3>
</div>
</div>
</div>
</b:if>
</b:if>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>
<meta expr:content='data:post.snippet' itemprop='description'/>
<div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
<b:if cond='data:blog.homepageUrl != data:blog.url and data:blog.pageType == &quot;item&quot;'>
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.labels'>
<div class='breadcrumbs' id='breadcrumbs'>
<span itemscope='itemscope' itemtype='http://data-vocabulary.org/Breadcrumb'><a expr:href='data:blog.homepageUrl' itemprop='url' title='Home'><span itemprop='title'>Home</span></a></span><b:loop values='data:post.labels' var='label'>
<span itemscope='itemscope' itemtype='http://data-vocabulary.org/Breadcrumb'><a expr:href='data:label.url + &quot;?max-results=6&quot;' expr:title='data:label.name' itemprop='url'><span itemprop='title'><data:label.name/></span></a><b:if cond='data:label.isLast != &quot;true&quot;'/></span>
</b:loop> <span class='bred'><data:post.title/></span>
</div>
</b:if>
</b:loop>
</b:if>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:post.title'>
      <h2 class='post-title entry-title' itemprop='headline'>
     <b:if cond='data:post.link'>
       <a expr:href='data:post.link' expr:title='data:post.title' itemprop='url mainEntityOfPage'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a expr:href='data:post.url' expr:title='data:post.title' itemprop='url mainEntityOfPage'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h2>
</b:if>
<b:else/>
      <h1 class='post-title entry-title' itemprop='headline'>
     <b:if cond='data:post.link'>
       <a itemprop='url mainEntityOfPage'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a itemprop='url mainEntityOfPage'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h1>
</b:if>
<b:if cond='data:blog.pageType != &quot;static_page&quot; and data:blog.pageType != &quot;item&quot;'>
<div class='post-snippet'>
      <data:post.snippet/>
    </div>
<div class='button-wrap'>
<a expr:href='data:post.url'>Readmore</a>
</div>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<data:post.body/>
</b:if>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<data:post.body/>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='share-wrapper' id='share_btnper'>
<b:include data='post' name='sharethis'/>
  </div>
</b:if>
<div style='clear:both'/> <!-- clear for photos floats -->
</div>
</article>
</b:includable>
                        <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
                        <b:includable id='shareButtons' var='post'>
<b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=620\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showOrkutButton'><a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToOrkutMsg/></span></a></b:if><b:if cond='data:top.showDummy'><div class='goog-inline-block dummy-container'><data:post.dummyTag/></div></b:if>
</b:includable>
                        <b:includable id='sharethis' var='post'>
<div class='share_btn'>
<ul>
<li><a class='fb' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:blog.url' target='_blank'>
<svg viewBox='0 0 512 512'>
<path d='M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159  c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44  c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0  c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0  c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258  v83.975C126.683,268.993,130.379,272.691,134.941,272.691z' style='fill:#457dca;'/>
</svg>
</a></li>

<li><a class='tw' expr:href='&quot;http://www.blogger.com/share-post.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;target=twitter&quot;' target='_blank'>
<svg viewBox='0 0 512 512'>
<path d='M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016  c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992  c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056  c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152  c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792  c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44  C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568  C480.224,136.96,497.728,118.496,512,97.248z' style='fill:#03A9F4;'/>
</svg></a></li>

<li><a expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;media=&quot; + data:blog.postImageUrl + &quot;&amp;description=&quot; + data:blog.pageName' rel='nofollow' target='_blank'>
<svg viewBox='0 0 511.977 511.977'>
<path d='M262.948,0C122.628,0,48.004,89.92,48.004,187.968c0,45.472,25.408,102.176,66.08,120.16    c6.176,2.784,9.536,1.6,10.912-4.128c1.216-4.352,6.56-25.312,9.152-35.2c0.8-3.168,0.384-5.92-2.176-8.896    c-13.504-15.616-24.224-44.064-24.224-70.752c0-68.384,54.368-134.784,146.88-134.784c80,0,135.968,51.968,135.968,126.304    c0,84-44.448,142.112-102.208,142.112c-31.968,0-55.776-25.088-48.224-56.128c9.12-36.96,27.008-76.704,27.008-103.36    c0-23.904-13.504-43.68-41.088-43.68c-32.544,0-58.944,32.224-58.944,75.488c0,27.488,9.728,46.048,9.728,46.048    S144.676,371.2,138.692,395.488c-10.112,41.12,1.376,107.712,2.368,113.44c0.608,3.168,4.16,4.16,6.144,1.568    c3.168-4.16,42.08-59.68,52.992-99.808c3.968-14.624,20.256-73.92,20.256-73.92c10.72,19.36,41.664,35.584,74.624,35.584    c98.048,0,168.896-86.176,168.896-193.12C463.62,76.704,375.876,0,262.948,0z' style='fill:#f33021;'/>
</svg>
</a></li>

<li><a class='wa' data-action='share/whatsapp/share' expr:href='&quot;whatsapp://send?text=&quot; + data:post.title + &quot;%20%2D%20&quot; + data:post.url' rel='nofollow noopener' target='_blank'><svg viewBox='0 0 418.135 418.135'>
	<path d='M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536   L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631   c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197   c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607   l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819   c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817   C371.446,250.361,354.281,291.803,323.886,322.197z' style='fill:#7AD06D;'/>
	<path d='M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008   c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218   l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356   c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057   c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z' style='fill:#7AD06D;'/>
</svg>
</a></li>

<li><a expr:href='&quot;https://telegram.me/share/url?url=&quot; + data:post.url + &quot;&amp;text=Ada%20yang%20keren%20lho,%20nyesel%20kalo%20ga%20buka...%20kunjungi:&quot;' target='_blank'>
<svg viewBox='0 -31 512 512'><path d='m211 270-40.917969 43.675781 10.917969 76.324219 120-90zm0 0' fill='#00c0f1'/><path d='m0 180 121 60 90 30 210 180 91-450zm0 0' fill='#76e2f8'/><path d='m121 240 60 150 30-120 210-180zm0 0' fill='#25d9f8'/></svg>
</a></li>

<li><a expr:href='&quot;mailto:?subject=&quot; + data:post.title + &quot;&amp;body=&quot; + data:post.url' rel='nofollow' target='_blank'>
<svg viewBox='0 0 58 58' x='0px'>
		<polygon points='0,5.5 0,44.5 28,44.5 56,44.5 56,5.5   ' style='fill:#DCD6CD;'/>
		<path d='M30.965,27.607c-1.637,1.462-4.292,1.462-5.93,0l-2.087-1.843C16.419,31.591,0,44.5,0,44.5h21.607    h12.787H56c0,0-16.419-12.909-22.948-18.736L30.965,27.607z' style='fill:#E8E3D9;'/>
		<path d='M0,5.5l25.035,22.107c1.637,1.462,4.292,1.462,5.93,0L56,5.5H0z' style='fill:#EFEBDE;'/>
		<rect height='22' style='fill:#48A0DC;' width='22' x='36' y='30.5'/>
		<rect height='16' style='fill:#FFFFFF;' width='2' x='46' y='36.5'/>
		<polygon points='52.293,43.207 47,37.914 41.707,43.207 40.293,41.793 47,35.086 53.707,41.793   ' style='fill:#FFFFFF;'/>
</svg>
</a>
</li>
 
</ul>
</div>
</b:includable>
                        <b:includable id='status-message'>
<b:if cond='data:navMessage'>
<div>
</div>
<div class='clr'/>
</b:if>
</b:includable>
                        <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                        <b:includable id='threaded_comment_css'>   
</b:includable>
                        <b:includable id='threaded_comment_js' var='post'>
  <script defer='defer' expr:src='data:post.commentSrc' type='text/javascript'/>
  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var postId = &#39;<data:post.id/>&#39;;
      var feed = &#39;<data:post.commentFeed/>&#39;;
      var authorName = &#39;<data:post.author/>&#39;;
      var authorUrl = &#39;<data:post.authorUrl/>&#39;;
      var blogId = &#39;<data:top.id/>&#39;;
      var baseUri = &#39;<data:post.commentBase/>&#39;;
// <![CDATA[
      feed += '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }
      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }
      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                console.log(entry.gd$extendedProperty[k].name + ' - ' + entry.gd$extendedProperty[k].value);
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };
      var paginator = function(callback) {
        if (hasMore()) {
          var url = feed;
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == authorName
              && comment.author.profileUrl == authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return baseUri + '/delete-comment.g?blogID=' + blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };
      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;
      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };
      var tok = 'comment-form_';
      var hash = window.location.hash || '';
      var startThread = hash.indexOf(tok) == 1 ? hash.substring(tok.length + 1) : undefined;
      // Configure commenting API:
      var configJso = {
        'maxDepth': 2
      };
      var provider = {
        'id': postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };
      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };
      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
                        <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
   <h3>
  <b:if cond='data:post.numComments == 1'>1 <data:commentLabel/>:
     <b:else/>
      <span class='embel'/> <data:post.numComments/> <data:commentLabelPlural/>
    </b:if>
   </h3>
    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>
    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>
    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
      <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
    </div>
    </div>
  </div>
</b:includable>
                      </b:widget>
                    </b:section>
<b:if cond='data:blog.url == data:blog.homepageUrl'>
<a class='allbtn' href='/search/label'>All Post</a>
</b:if>
</div></div>  
<div class='sidebar-wrapper'>
 <b:section class='sidebar' id='sidebar' showaddelement='yes'>
   <b:widget id='HTML1' locked='true' title='' type='HTML' version='1'>
     <b:widget-settings>
       <b:widget-setting name='content'>&lt;div id=&#39;search-wrapper&#39;&gt;
&lt;h4 class=&#39;tetle&#39;&gt;Search This Site&lt;/h4&gt;
&lt;div id=&#39;search-box&#39;&gt;
&lt;div itemprop=&#39;mainEntity&#39; itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/WebSite&#39;&gt;

&lt;form action=&#39;https://landingthebusiness.blogspot.com/search&#39; itemprop=&#39;potentialAction&#39; itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/SearchAction&#39; method=&#39;get&#39; target=&#39;_blank&#39;&gt;

&lt;input class=&#39;search-form&#39; id=&#39;feed-q-input&#39; itemprop=&#39;query-input&#39; name=&#39;q&#39; placeholder=&#39;Search&#39; required=&#39;required&#39; type=&#39;text&#39;/&gt;
&lt;button class=&#39;search-button&#39; title=&#39;Search&#39; type=&#39;submit&#39;&gt;&lt;i class=&quot;fa fa-search&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/form&gt;&lt;/div&gt;
&lt;/div&gt;&lt;/div&gt;</b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
   </b:widget>
   <b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts'>
     <b:widget-settings>
       <b:widget-setting name='numItemsToShow'>7</b:widget-setting>
       <b:widget-setting name='showThumbnails'>true</b:widget-setting>
       <b:widget-setting name='showSnippets'>true</b:widget-setting>
       <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='!data:showThumbnails'>
          <b:if cond='!data:showSnippets'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <!-- (3) Show only thumbnails or (4) Snippets and thumbnails. -->
          <div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'>
            <b:if cond='data:post.featuredImage.isResizable or data:post.thumbnail'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.href' target='_blank'>
                  <b:with value='data:post.featuredImage.isResizable                                  ? resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)                                  : data:post.thumbnail' var='image'>
                    <img alt='' border='0' expr:src='data:image'/>
                  </b:with>
                </a>
              </div>
            </b:if>
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <b:if cond='data:showSnippets'>
              <div class='item-snippet'><data:post.snippet/></div>
            </b:if>
          </div>
          <div style='clear: both;'/>
        </b:if>
      </li>
      </b:loop>
    </ul>
    <b:include name='quickedit'/>
  </div>
</b:includable>
   </b:widget>
 </b:section>
</div>
<div class='clr'/>
</div>
