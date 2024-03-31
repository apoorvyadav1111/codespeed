# inorder traversal
fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    if root:
        inorder_traversal(root.left)
        result.push(root.val)
        inorder_traversal(root.right)
    return result
}